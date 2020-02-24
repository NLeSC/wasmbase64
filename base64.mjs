let wasmModule;
let wasmInstance;
const PAGE_SIZE = 1024 * 64;
const DATA_SIZE = 64 + 256;

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