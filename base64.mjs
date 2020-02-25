const decodeWasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,96,0,0,96,2,127,127,1,127,3,3,2,0,1,4,5,1,112,1,1,1,5,3,1,0,2,6,43,7,127,1,65,128,136,4,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,128,136,4,11,127,0,65,0,11,127,0,65,1,11,7,148,1,10,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,0,1,8,117,110,98,97,115,101,54,52,0,1,12,95,95,100,115,111,95,104,97,110,100,108,101,3,1,10,95,95,100,97,116,97,95,101,110,100,3,2,13,95,95,103,108,111,98,97,108,95,98,97,115,101,3,3,11,95,95,104,101,97,112,95,98,97,115,101,3,4,13,95,95,109,101,109,111,114,121,95,98,97,115,101,3,5,12,95,95,116,97,98,108,101,95,98,97,115,101,3,6,10,73,2,2,0,11,68,1,1,127,65,0,33,2,2,64,32,1,65,2,72,13,0,32,1,65,3,108,65,4,109,65,2,65,1,32,1,32,0,106,34,1,65,127,106,45,0,0,65,61,70,34,2,27,32,2,32,1,65,126,106,45,0,0,65,61,70,27,107,33,2,11,32,2,11,0,44,4,110,97,109,101,1,37,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,1,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,0,93,9,112,114,111,100,117,99,101,114,115,1,12,112,114,111,99,101,115,115,101,100,45,98,121,1,5,99,108,97,110,103,61,49,49,46,48,46,48,45,43,43,50,48,50,48,48,50,50,52,48,54,48,50,49,50,43,56,98,51,97,54,50,100,99,57,56,55,45,49,126,101,120,112,49,126,50,48,50,48,48,50,50,52,48,53,48,56,50,48,46,52,51,57]);
let decodeWasmModule = null;

const encodeWasmCodeBase64 = "AGFzbQEAAAABCQJgAABgAX8BfwMDAgABBAUBcAEBAQUDAQACBisHfwFBgIgEC38AQYAIC38AQYAIC38AQYAIC38AQYCIBAt/AEEAC38AQQELB5IBCgZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwAAD2dldF9vdXRwdXRfc2l6ZQABBmJhc2U2NAABDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19oZWFwX2Jhc2UDBA1fX21lbW9yeV9iYXNlAwUMX190YWJsZV9iYXNlAwYKKAICAAsjAQF/IABBA28iAUEBdEECcSABQQF2QQFxciAAakECdEEDbQsALARuYW1lASUCABFfX3dhc21fY2FsbF9jdG9ycwEPZ2V0X291dHB1dF9zaXplAF0JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBBWNsYW5nPTExLjAuMC0rKzIwMjAwMjI0MDYwMjEyKzhiM2E2MmRjOTg3LTF+ZXhwMX4yMDIwMDIyNDA1MDgyMC40Mzk=";
let encodeWasmCode = null;
let encodeWasmModule = null;

const PAGE_SIZE = 1024 * 64;

class Base64Encoder {
    encodedLength(inputLength) {
        const modulusLen = inputLength % 3 ;
        const pad = ((modulusLen&1)<<1) + ((modulusLen&2)>>1);
        const encLength = 4*(inputLength + pad)/3 ;
        return encLength;
    }
}

export class Base64Decoder {
    constructor() {};
    instance = null;

    decodedLength(input) {
        let pad = 0 ;
        const inputSize = input.byteLength;
        const inputUint8 = new Uint8Array(input);
        if( inputSize < 2 ) { // 2 accesses below would be OOB.
            return 0;
        }
        // String.fromCharCode(61) === "="
        if( inputUint8[ inputSize-1 ] == 61 ) ++pad ;
        if( inputUint8[ inputSize-2 ] == 61 ) ++pad ;
        return 3*inputSize/4 - pad ;
    }
    
    async init () {
        if (!decodeWasmModule) {
            decodeWasmModule = await WebAssembly.compile(decodeWasmCode);
        }
        if (!this.instance) {
            this.instance = await WebAssembly.instantiate(decodeWasmModule, { });
        }
    }

    growMemory 

    decode (inputBuffer) {
        if (!this.instance) { throw new Error("Please call .init() first."); }
        const heapBase = this.instance.exports.__heap_base.value
        const decodedLength = this.decodedLength(inputBuffer);
        
        // ensure there is enough memory
        const requiredMemory = heapBase + inputBuffer.byteLength + decodedLength;
        const requiredPages = Math.ceil(requiredMemory / PAGE_SIZE);
        const currentPages = this.instance.exports.memory.buffer.byteLength / PAGE_SIZE;
        if (requiredPages > currentPages) {
            this.instance.exports.memory.grow(requiredPages - currentPages);
        }

        const fullMem = new Uint8Array(this.instance.exports.memory.buffer);
        const membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);

        membuf.set(inputBuffer);
        debugger;
        this.instance.exports.unbase64(heapBase, inputBuffer.byteLength);
        return membuf.slice(inputBuffer.byteLength, inputBuffer.byteLength + decodedLength);
        // return membuf.slice(buffer.byteLength + buf.byteLength, DATA_SIZE + buf.byteLength + encLength);
    }
}



// async function init() {
//     decodeWasmModule = await WebAssembly.compile(programBuffer);
//     window.instance=wasmInstance = await WebAssembly.instantiate(wasmModule, {
//         // env: { memory }
//     });
//     const membuf = new Uint8Array(wasmInstance.exports.memory.buffer);
// }

// function encodedLength(inputLength) {
//     const modulusLen = inputLength % 3 ;
//     const pad = ((modulusLen&1)<<1) + ((modulusLen&2)>>1);
//     const encLength = 4*(inputLength + pad)/3 ;
//     return encLength;
// }

// function growMem(inputLength) {
//     const encLength = encodedLength(inputLength);
//     const memorySize = DATA_SIZE + inputLength + encLength;
//     const memoryPages = Math.ceil(memorySize / PAGE_SIZE);
//     const currentMemoryPages = wasmInstance.exports.memory.buffer.byteLength / PAGE_SIZE;
//     if (memoryPages > currentMemoryPages) {
//         wasmInstance.exports.memory.grow(memoryPages - currentMemoryPages);
//     }
// }

// async function base64Encode(buf) {
//     const encLength = encodedLength(buf.byteLength);
//     growMem(buf.byteLength);
//     let membuf = new Uint8Array(wasmInstance.exports.memory.buffer);
//     membuf.set(new Uint8Array(buf), DATA_SIZE);
//     wasmInstance.exports.base64(0, DATA_SIZE, buf.byteLength);
//     return membuf.slice(DATA_SIZE + buf.byteLength, DATA_SIZE + buf.byteLength + encLength);
// }

// export { init, base64Encode }

// // const inputStr = "testj";
// // const input = new Uint8Array(buffer, offset, inputStr.length);
// // input.set(inputStr.split('').map(c => c.charCodeAt()));

// // log(wasmInstance.exports.base64(0, offset, inputStr.length));

// // const int8 = new Uint8Array(buffer);

// // // console.log(Array.from(int8.slice(256, 20)).map(i => String.fromCharCode(i)));
// // console.log(Array.from(int8).slice(256 + 64, 256 + 64 + 20).map((i, idx) => idx + ' ' + String.fromCharCode(i)).join('\n'));
// // // for (let i=0; i<1000; i++) {
// // //   log(i + " " +  int8[i]);
// // // }