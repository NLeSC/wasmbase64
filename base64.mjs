const decodeWasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,7,1,96,2,127,127,1,127,3,2,1,0,4,5,1,112,1,1,1,5,3,1,0,2,6,15,2,127,1,65,128,138,4,11,127,0,65,128,138,4,11,7,35,3,6,109,101,109,111,114,121,2,0,8,117,110,98,97,115,101,54,52,0,0,11,95,95,104,101,97,112,95,98,97,115,101,3,1,10,192,3,1,189,3,1,10,127,65,0,33,2,2,64,32,1,65,2,72,13,0,32,1,65,3,108,65,4,109,33,3,65,0,33,4,65,0,33,5,2,64,32,1,65,124,106,65,2,65,1,32,0,32,1,106,34,6,65,127,106,45,0,0,65,61,70,34,2,27,32,2,32,6,65,126,106,45,0,0,65,61,70,27,34,7,107,34,8,65,0,72,13,0,65,0,33,5,65,0,33,4,3,64,32,0,32,4,106,34,2,45,0,0,33,9,32,2,65,1,106,45,0,0,33,10,32,0,32,1,106,34,11,65,2,106,32,2,65,3,106,45,0,0,65,128,136,128,128,0,106,45,0,0,32,2,65,2,106,45,0,0,65,128,136,128,128,0,106,45,0,0,34,2,65,6,116,114,58,0,0,32,11,65,1,106,32,2,65,2,118,32,10,65,128,136,128,128,0,106,45,0,0,34,2,65,4,116,114,58,0,0,32,11,32,2,65,4,118,32,9,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,32,1,65,3,106,33,1,32,5,65,3,106,33,5,32,4,65,4,106,34,4,32,8,76,13,0,11,11,32,3,32,7,107,33,2,2,64,32,7,65,2,70,13,0,32,7,65,1,71,13,1,32,0,32,4,106,45,0,0,33,1,32,6,32,5,106,34,11,65,1,106,32,0,32,4,65,2,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,2,118,32,0,32,4,65,1,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,34,4,65,4,116,114,58,0,0,32,11,32,4,65,4,118,32,1,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,32,2,15,11,32,6,32,5,106,32,0,32,4,65,1,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,4,118,32,0,32,4,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,11,32,2,11,11,136,2,1,0,65,128,8,11,128,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,4,110,97,109,101,1,11,1,0,8,117,110,98,97,115,101,54,52]);
let decodeWasmModule = null;

const encodeWasmCodeBase64 = "AGFzbQEAAAABBwFgAn9/AX8DAgEABAUBcAEBAQUDAQACBg8CfwFBgIgEC38AQYCIBAsHIwMGbWVtb3J5AgAIdW5iYXNlNjQAAAtfX2hlYXBfYmFzZQMBCkYBRAEBf0EAIQICQCABQQJIDQAgAUEDbEEEbUECQQEgASAAaiIBQX9qLQAAQT1GIgIbIAIgAUF+ai0AAEE9RhtrIQILIAILABkEbmFtZQESAQAPZ2V0X291dHB1dF9zaXplAF0JcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBBWNsYW5nPTExLjAuMC0rKzIwMjAwMjI0MDYwMjEyKzhiM2E2MmRjOTg3LTF+ZXhwMX4yMDIwMDIyNDA1MDgyMC40Mzk=";
let encodeWasmCode = null;
let encodeWasmModule = null;

const PAGE_SIZE = 1024 * 64;

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
        return 3*inputSize/4 - pad;
    }
    
    async init () {
        if (!decodeWasmModule) {
            decodeWasmModule = await WebAssembly.compile(decodeWasmCode);
        }
        if (!this.instance) {
            this.instance = await WebAssembly.instantiate(decodeWasmModule, { });
        }
    }

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

        const membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);

        membuf.set(inputBuffer);
        this.instance.exports.unbase64(heapBase, inputBuffer.byteLength);
        return membuf.slice(inputBuffer.byteLength, inputBuffer.byteLength + decodedLength);
    }

    decodeString (inputString) {
        const textEncoder = new TextEncoder('utf-8');
        const textDecoder = new TextDecoder('utf-8');
        return this.decode(
            textEncoder.encode(inputString)
        );
    }
}

export class Base64Encoder {
    constructor() {};
    instance = null;

    encodedLength(inputLength) {
        const modulusLen = inputLength % 3 ;
        const pad = ((modulusLen&1)<<1) + ((modulusLen&2)>>1);
        const encLength = 4*(inputLength + pad)/3 ;
        return encLength;
    }
    
    async init () {
        if (!encodeWasmCode) {
            const decoder = new Base64Decoder();
            await decoder.init();
            encodeWasmCode = decoder.decodeString(encodeWasmCodeBase64);
        }
        if (!encodeWasmModule) {
            encodeWasmModule = await WebAssembly.compile(encodeWasmCode);
        }
        if (!this.instance) {
            this.instance = await WebAssembly.instantiate(encodeWasmModule, { });
        }
    }

    encode (inputBuffer) {
        debugger;
        if (!this.instance) { throw new Error("Please call .init() first."); }
        const heapBase = this.instance.exports.__heap_base.value
        const encodedLength = this.encodedLength(inputBuffer.byteLength);
        
        // ensure there is enough memory
        const requiredMemory = heapBase + inputBuffer.byteLength + encodedLength;
        const requiredPages = Math.ceil(requiredMemory / PAGE_SIZE);
        const currentPages = this.instance.exports.memory.buffer.byteLength / PAGE_SIZE;
        if (requiredPages > currentPages) {
            this.instance.exports.memory.grow(requiredPages - currentPages);
        }

        const membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);

        membuf.set(inputBuffer);
        this.instance.exports.base64(heapBase, inputBuffer.byteLength);
        return membuf.slice(inputBuffer.byteLength, inputBuffer.byteLength + encodedLength);
    }

    encodeString (inputString) {
        const textEncoder = new TextEncoder('utf-8');
        return this.encode(
            textEncoder.encode(inputString)
        );
    }
}