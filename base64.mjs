let wasmModule;
let wasmInstance;

const encodeWasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,9,2,96,0,0,96,1,127,1,127,3,3,2,0,1,4,5,1,112,1,1,1,5,3,1,0,2,6,43,7,127,1,65,128,136,4,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,128,136,4,11,127,0,65,0,11,127,0,65,1,11,7,146,1,10,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,0,1,6,98,97,115,101,54,52,0,1,12,95,95,100,115,111,95,104,97,110,100,108,101,3,1,10,95,95,100,97,116,97,95,101,110,100,3,2,13,95,95,103,108,111,98,97,108,95,98,97,115,101,3,3,11,95,95,104,101,97,112,95,98,97,115,101,3,4,13,95,95,109,101,109,111,114,121,95,98,97,115,101,3,5,12,95,95,116,97,98,108,101,95,98,97,115,101,3,6,10,40,2,2,0,11,35,1,1,127,32,0,65,3,111,34,1,65,1,116,65,2,113,32,1,65,1,118,65,1,113,114,32,0,106,65,2,116,65,3,109,11,0,44,4,110,97,109,101,1,37,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,1,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,0,93,9,112,114,111,100,117,99,101,114,115,1,12,112,114,111,99,101,115,115,101,100,45,98,121,1,5,99,108,97,110,103,61,49,49,46,48,46,48,45,43,43,50,48,50,48,48,50,50,52,48,54,48,50,49,50,43,56,98,51,97,54,50,100,99,57,56,55,45,49,126,101,120,112,49,126,50,48,50,48,48,50,50,52,48,53,48,56,50,48,46,52,51,57]);

class Base64 {
    
    encodeWasmModule = null;
    encodeWasmInstance = null;


}

const PAGE_SIZE = 1024 * 64;

async function init() {
    const wasmCode = 'AGFzbQEAAAABCwJgAABgA39/fwF/AwQDAAEBBAUBcAEBAQUDAQACBiEFfwFBgIgEC38AQYAIC38AQYAIC38AQYAIC38AQYCIBAsHbAgGbWVtb3J5AgARX193YXNtX2NhbGxfY3RvcnMAAAZiYXNlNjQAAQh1bmJhc2U2NAACDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19oZWFwX2Jhc2UDBArTBgMCAAu0AwEKfyACQQNvIgNBAXRBAnEgA0EBdkEBcXIiBCACakECdEEDbSEFQQAhBkEAIQcCQCACQX1qIghBAEgNAEEAIQcgAiEJQQAhBgNAIAEgBmoiCkECai0AACELIApBAWotAAAhDCABIAlqIgMgACAKLQAAIgpBAnZqLQAAOgAAIANBAWogACAKQQR0QTBxIAxBBHZyai0AADoAACADQQJqIAAgDEECdEE8cSALQQZ2cmotAAA6AAAgA0EDaiAAIAtBP3FqLQAAOgAAIAlBBGohCSAHQQRqIQcgBkEDaiIGIAhMDQALCyABIAJqIQMCQAJAAkAgBEEBRg0AIARBAkcNAiADIAdqIAAgASAGaiIGLQAAQQJ2ai0AADoAACADIAdBAXJqIAAgBi0AAEEEdEEwcWotAAA6AABBPSEADAELIAMgB2ogACABIAZqIgYtAABBAnZqLQAAOgAAIAMgB0EBcmogACAGLQAAQQR0QTBxIAZBAWoiBi0AAEEEdnJqLQAAOgAAIAAgBi0AAEECdEE8cWotAAAhAAsgAyAHQQJyaiAAOgAAIAMgB0EDcmpBPToAAAsgBQuXAwEKf0EAIQMCQCACQQJIDQAgAkEDbEEEbSEEQQAhBUEAIQYCQCACQXxqQQJBASABIAJqIgdBf2otAABBPUYiAxsgAyAHQX5qLQAAQT1GGyIIayIJQQBIDQBBACEGQQAhBQNAIAAgASAFaiIDLQAAai0AACEKIAAgA0EBai0AAGosAAAhCyABIAJqIgxBAmogACADQQNqLQAAai0AACAAIANBAmotAABqLAAAIgNBBnRyOgAAIAxBAWogA0ECdiALQQR0cjoAACAMIAtBBHYgCkECdHI6AAAgAkEDaiECIAZBA2ohBiAFQQRqIgUgCUwNAAsLIAQgCGshAwJAIAhBAkYNACAIQQFHDQEgACABIAVqLQAAai0AACECIAcgBmoiC0EBaiAAIAEgBUECcmotAABqLAAAQQJ2IAAgASAFQQFyai0AAGosAAAiAEEEdHI6AAAgCyAAQQR2IAJBAnRyOgAAIAMPCyAHIAZqIAAgASAFQQFyai0AAGosAABBBHYgACABIAVqLQAAai0AAEECdHI6AAALIAMLAC0EbmFtZQEmAwARX193YXNtX2NhbGxfY3RvcnMBBmJhc2U2NAIIdW5iYXNlNjQ=';
    function str2ab(str) {
        var buf = new ArrayBuffer(str.length); 
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    const programBuffer = str2ab(atob(wasmCode));
    wasmModule = await WebAssembly.compile(programBuffer);
    window.instance=wasmInstance = await WebAssembly.instantiate(wasmModule, {
        // env: { memory }
    });
    const membuf = new Uint8Array(wasmInstance.exports.memory.buffer);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    membuf.set(chars.split('').map(c => c.charCodeAt()));
    membuf.set([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //10 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //20 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //30 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //40 
        0, 0, 0, 62, 0, 0, 0, 63, 52, 53, //50 
        54, 55, 56, 57, 58, 59, 60, 61, 0, 0, //60 
        0, 0, 0, 0, 0, 0, 1, 2, 3, 4, //70 
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, //80 
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, //90 
        25, 0, 0, 0, 0, 0, 0, 26, 27, 28, //100 
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, //110 
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, //120 
        49, 50, 51, 0, 0, 0, 0, 0, 0, 0, //130 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //140 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //150 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //160 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //170 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //180 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //190 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //200 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //210 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //220 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //230 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //240 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //250 
        0, 0, 0, 0, 0, 0,
    ], 64);
}

function encodedLength(inputLength) {
    const modulusLen = inputLength % 3 ;
    const pad = ((modulusLen&1)<<1) + ((modulusLen&2)>>1);
    const encLength = 4*(inputLength + pad)/3 ;
    return encLength;
}

function growMem(inputLength) {
    const encLength = encodedLength(inputLength);
    const memorySize = DATA_SIZE + inputLength + encLength;
    const memoryPages = Math.ceil(memorySize / PAGE_SIZE);
    const currentMemoryPages = wasmInstance.exports.memory.buffer.byteLength / PAGE_SIZE;
    if (memoryPages > currentMemoryPages) {
        wasmInstance.exports.memory.grow(memoryPages - currentMemoryPages);
    }
}

async function base64Encode(buf) {
    const encLength = encodedLength(buf.byteLength);
    growMem(buf.byteLength);
    let membuf = new Uint8Array(wasmInstance.exports.memory.buffer);
    membuf.set(new Uint8Array(buf), DATA_SIZE);
    wasmInstance.exports.base64(0, DATA_SIZE, buf.byteLength);
    return membuf.slice(DATA_SIZE + buf.byteLength, DATA_SIZE + buf.byteLength + encLength);
}

export { init, base64Encode }

// const inputStr = "testj";
// const input = new Uint8Array(buffer, offset, inputStr.length);
// input.set(inputStr.split('').map(c => c.charCodeAt()));

// log(wasmInstance.exports.base64(0, offset, inputStr.length));

// const int8 = new Uint8Array(buffer);

// // console.log(Array.from(int8.slice(256, 20)).map(i => String.fromCharCode(i)));
// console.log(Array.from(int8).slice(256 + 64, 256 + 64 + 20).map((i, idx) => idx + ' ' + String.fromCharCode(i)).join('\n'));
// // for (let i=0; i<1000; i++) {
// //   log(i + " " +  int8[i]);
// // }