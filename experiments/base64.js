var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

const buffer = wasmInstance.exports.memory.buffer;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const charsArr = new Uint8Array(buffer, 0, 64);
charsArr.set(chars.split('').map(c => c.charCodeAt()));
const unb64 = new Uint8Array(buffer, 64, 256);
unb64.set([
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
]);

const offset = 256 + 64;

const inputStr = "testj";
const input = new Uint8Array(buffer, offset, inputStr.length);
input.set(inputStr.split('').map(c => c.charCodeAt()));

log(wasmInstance.exports.base64(0, offset, inputStr.length));

const int8 = new Uint8Array(buffer);

// console.log(Array.from(int8.slice(256, 20)).map(i => String.fromCharCode(i)));
console.log(Array.from(int8).slice(256 + 64, 256 + 64 + 20).map((i, idx) => idx + ' ' + String.fromCharCode(i)).join('\n'));
// for (let i=0; i<1000; i++) {
//   log(i + " " +  int8[i]);
// }