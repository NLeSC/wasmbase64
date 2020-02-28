const decodeWasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,15,3,96,0,0,96,2,127,127,1,127,96,2,127,127,0,3,4,3,0,1,2,4,5,1,112,1,1,1,5,3,1,0,2,6,43,7,127,1,65,128,138,4,11,127,0,65,128,8,11,127,0,65,128,10,11,127,0,65,128,8,11,127,0,65,128,138,4,11,127,0,65,0,11,127,0,65,1,11,7,148,1,10,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,0,1,8,117,110,98,97,115,101,54,52,0,2,12,95,95,100,115,111,95,104,97,110,100,108,101,3,1,10,95,95,100,97,116,97,95,101,110,100,3,2,13,95,95,103,108,111,98,97,108,95,98,97,115,101,3,3,11,95,95,104,101,97,112,95,98,97,115,101,3,4,13,95,95,109,101,109,111,114,121,95,98,97,115,101,3,5,12,95,95,116,97,98,108,101,95,98,97,115,101,3,6,10,135,4,3,2,0,11,68,1,1,127,65,0,33,2,2,64,32,1,65,2,72,13,0,32,1,65,3,108,65,4,109,65,2,65,1,32,1,32,0,106,34,1,65,127,106,45,0,0,65,61,70,34,2,27,32,2,32,1,65,126,106,45,0,0,65,61,70,27,107,33,2,11,32,2,11,188,3,1,9,127,2,64,32,1,65,2,72,13,0,65,0,33,2,65,0,33,3,2,64,32,1,65,2,65,1,32,0,32,1,106,34,4,65,127,106,45,0,0,65,61,70,34,5,27,32,5,32,4,65,126,106,45,0,0,65,61,70,27,34,6,107,65,124,106,34,7,65,0,72,13,0,32,7,65,2,118,65,3,108,33,8,65,0,33,3,3,64,32,0,32,3,106,34,2,45,0,0,33,9,32,2,65,1,106,45,0,0,33,10,32,0,32,1,106,34,5,65,2,106,32,2,65,3,106,45,0,0,65,128,136,128,128,0,106,45,0,0,32,2,65,2,106,45,0,0,65,128,136,128,128,0,106,45,0,0,34,2,65,6,116,114,58,0,0,32,5,65,1,106,32,2,65,2,118,32,10,65,128,136,128,128,0,106,45,0,0,34,2,65,4,116,114,58,0,0,32,5,32,2,65,4,118,32,9,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,32,1,65,3,106,33,1,32,3,65,4,106,34,3,32,7,76,13,0,11,32,8,65,3,106,33,3,32,7,65,4,106,65,124,113,33,2,11,32,6,65,127,106,34,1,65,1,75,13,0,2,64,2,64,32,1,14,2,0,1,0,11,32,0,32,2,106,45,0,0,33,1,32,4,32,3,106,34,3,65,1,106,32,0,32,2,65,2,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,2,118,32,0,32,2,65,1,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,34,2,65,4,116,114,58,0,0,32,3,32,2,65,4,118,32,1,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,15,11,32,4,32,3,106,32,0,32,2,65,1,114,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,4,118,32,0,32,2,106,45,0,0,65,128,136,128,128,0,106,45,0,0,65,2,116,114,58,0,0,11,11,11,136,2,1,0,65,128,8,11,128,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,4,110,97,109,101,1,47,3,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,1,15,103,101,116,95,111,117,116,112,117,116,95,115,105,122,101,2,8,117,110,98,97,115,101,54,52,0,93,9,112,114,111,100,117,99,101,114,115,1,12,112,114,111,99,101,115,115,101,100,45,98,121,1,5,99,108,97,110,103,61,49,49,46,48,46,48,45,43,43,50,48,50,48,48,50,50,55,48,54,48,50,51,52,43,54,50,49,51,56,56,52,54,56,98,53,45,49,126,101,120,112,49,126,50,48,50,48,48,50,50,55,48,53,48,56,50,55,46,52,52,50]);
let decodeWasmModule = null;

const encodeWasmCodeBase64 = "AGFzbQEAAAABDgNgAABgAX8Bf2ACf38AAwQDAAECBAUBcAEBAQUDAQACBisHfwFB0IgEC38AQYAIC38AQcEIC38AQYAIC38AQdCIBAt/AEEAC38AQQELB5IBCgZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwAAD2dldF9vdXRwdXRfc2l6ZQABBmJhc2U2NAACDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19oZWFwX2Jhc2UDBA1fX21lbW9yeV9iYXNlAwUMX190YWJsZV9iYXNlAwYK/wMDAgALIwEBfyAAQQNvIgFBAXRBAnEgAUEBdkEBcXIgAGpBAnRBA20L1QMBCX8gAUEDbyICQQF0QQJxIAJBAXZBAXFyIQNBACEEQQAhBQJAIAFBA0gNACABQX1qIQZBACEFIAEhB0EAIQQDQCAAIARqIghBAWotAAAhCSAIQQJqLQAAIQogACAHaiICIAgtAAAiCEECdkGAiICAAGotAAA6AAAgAkEDaiAKQT9xQYCIgIAAai0AADoAACACQQFqIAhBBHRBMHEgCUEEdnJBgIiAgABqLQAAOgAAIAJBAmogCUECdEE8cSAKQQZ2ckGAiICAAGotAAA6AAAgB0EEaiEHIAVBBGohBSAEQQNqIgQgBkwNAAsLAkAgA0F/aiIHQQFLDQAgACABaiECAkACQAJAIAcOAgEAAQsgAiAFaiAAIARqIgQtAABBAnZBgIiAgABqLQAAOgAAIAIgBUEBcmogBC0AAEEEdEEwcUGAiICAAGotAAA6AABBPSEEDAELIAIgBWogACAEaiIELQAAQQJ2QYCIgIAAai0AADoAACACIAVBAXJqIAQtAABBBHRBMHEgBEEBaiIELQAAQQR2ckGAiICAAGotAAA6AAAgBC0AAEECdEE8cUGAiICAAGotAAAhBAsgAiAFQQJyaiAEOgAAIAIgBUEDcmpBPToAAAsLC0gBAEGACAtBQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLwAANARuYW1lAS0DABFfX3dhc21fY2FsbF9jdG9ycwEPZ2V0X291dHB1dF9zaXplAgZiYXNlNjQAXQlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEFY2xhbmc9MTEuMC4wLSsrMjAyMDAyMjcwNjAyMzQrNjIxMzg4NDY4YjUtMX5leHAxfjIwMjAwMjI3MDUwODI3LjQ0Mg==";
let encodeWasmCode = null;
let encodeWasmModule = null;

const PAGE_SIZE = 1024 * 64;

export class Base64Decoder {
    constructor() {
      this.instance = null;
    };

    async init () {
        if (!decodeWasmModule) {
            decodeWasmModule = await WebAssembly.compile(decodeWasmCode);
        }
        if (!this.instance) {
            this.instance = await WebAssembly.instantiate(decodeWasmModule, { });
        }
    }

    growMemory(requiredMemory) {
        const requiredPages = Math.ceil(requiredMemory / PAGE_SIZE);
        const currentPages = this.instance.exports.memory.buffer.byteLength / PAGE_SIZE;
        if (requiredPages > currentPages) {
            this.instance.exports.memory.grow(requiredPages - currentPages);
        }
    }

    decode (inputBuffer) {
        if (!this.instance) { throw new Error("Please call .init() first."); }
        const heapBase = this.instance.exports.__heap_base.value;
        this.growMemory(heapBase + inputBuffer.byteLength);
        let membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);
        membuf.set(inputBuffer);
        const decodedLength = this.instance.exports.get_output_size(heapBase, inputBuffer.byteLength);
        this.growMemory(heapBase + inputBuffer.byteLength + decodedLength);
        membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);
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
    constructor() {
      this.instance = null;
    };

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

    growMemory(requiredMemory) {
        const requiredPages = Math.ceil(requiredMemory / PAGE_SIZE);
        const currentPages = this.instance.exports.memory.buffer.byteLength / PAGE_SIZE;
        if (requiredPages > currentPages) {
            this.instance.exports.memory.grow(requiredPages - currentPages);
        }
    }

    encode (inputBuffer) {
        if (!this.instance) { throw new Error("Please call .init() first."); }
        const heapBase = this.instance.exports.__heap_base.value;
        this.growMemory(heapBase + inputBuffer.byteLength);
        let membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);
        membuf.set(inputBuffer);
        const encodedLength = this.instance.exports.get_output_size(inputBuffer.byteLength);
        this.growMemory(heapBase + inputBuffer.byteLength + encodedLength);
        membuf = new Uint8Array(this.instance.exports.memory.buffer, heapBase);
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
