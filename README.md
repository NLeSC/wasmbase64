# Webassembly base64 encoder/decoder for Javascript

## How to use
Currently only exported as [base64.mjs](https://rawcdn.githack.com/NLeSC/wasmbase64/2e96082440cb78832465e8d6314c0a9ba0072897/dist/base64.mjs) (see [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)).

Converts to/from `ArrayBuffer`.

Example:

```html
<script type="module">
    import {Base64Decoder, Base64Encoder} from 'https://rawcdn.githack.com/NLeSC/wasmbase64/2e96082440cb78832465e8d6314c0a9ba0072897/dist/base64.mjs';
    
    // not really random.
    const randomBuffer = (size) => {
        const a = new Uint8Array(size);
        for (let i = 0; i< size; i++) {
            a[i] = i;
        }
        return a;
    };

    // init() (async) must be called first
    const encoder = new Base64Encoder();
    encoder.init().then(() => {
       const result_uint8 = encoder.encode(randomBuffer(1000));
       console.log(result_uint8);
    });
</script>
```

## Memory
Note that memory is not immediately released after encoding/decoding. It should be released when the instance is
garbage collected when it goes out of scope.

## Build requirements
- `build-essential`
- `clang-11`
- `lldb`
- `clangd-11`
- `lld-11 wabt`

## Build:
```
make
```

## Performance benchmark
There is an interesting story here. Native `window.btoa` and `window.atob` work on 'binary strings',
which are quite annoying to work with.

Modern JS has `ArrayBuffer` to work with binary data, which is much nicer, but conversion
to/from the binary string format is still very confusing. Try googling [arraybuffer to binary string](https://www.google.com/search?q=arraybuffer+to+binary+string).

This library uses `ArrayBuffer` only (there is `encodeString` and `decodeString`) though.

To try a fair comparison we're comparing encoders/decoders that work with binary strings
directly on binary strings - conversion to/from `ArrayBuffer` will have some overhead which 
is not included in the results.

Comparing:

- `wasm`: This implementation
- `ab`: https://github.com/niklasvh/base64-arraybuffer
- `native`: `window.btoa`, `window.atob`
- `jsbase64`: https://github.com/dankogai/js-base64

Machine:

- Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz
- Linux 5.3.0-3-amd64 #1 SMP Debian 5.3.15-1 (2019-12-07) x86_64 GNU/Linux

### Results
- Dict index is the size of the ArrayBuffer in bytes (10B, 10kB, 10MB).
- Time is the total time in milliseconds of running each implementation 10 times.

Chrome/encode.
```json
{
    "10": {
      "wasm": "0.2",
      "ab": "0.2",
      "native": "0.1",
      "jsbase64": "0.2"
    },
    "10000": {
      "wasm": "1.2",
      "ab": "18.4",
      "native": "0.3",
      "jsbase64": "13.1"
    },
    "10000000": {
      "wasm": "216.4",
      "ab": "17073.0",
      "native": "371.3",
      "jsbase64": "9826.1"
    }
}
```
Chrome/decode
```json
{
    "10": {
      "wasm": "0.2",
      "ab": "0.2",
      "native": "0.1",
      "jsbase64": "0.2"
    },
    "10000": {
      "wasm": "0.2",
      "ab": "11.5",
      "native": "1.1",
      "jsbase64": "1.4"
    },
    "10000000": {
      "wasm": "213.1",
      "ab": "632.4",
      "native": "871.7",
      "jsbase64": "1355.6"
    }
}
```

Firefox/encode
```json
{
    "10": {
      "wasm": "2.0",
      "ab": "0.0",
      "native": "0.0",
      "jsbase64": "0.0"
    },
    "10000": {
      "wasm": "0.0",
      "ab": "7.0",
      "native": "0.0",
      "jsbase64": "12.0"
    },
    "10000000": {
      "wasm": "218.0",
      "ab": "4632.0",
      "native": "585.0",
      "jsbase64": "6215.0"
    }
}
```

```json
{
    "10": {
      "wasm": "1.0",
      "ab": "1.0",
      "native": "0.0",
      "jsbase64": "0.0"
    },
    "10000": {
      "wasm": "0.0",
      "ab": "3.0",
      "native": "0.0",
      "jsbase64": "2.0"
    },
    "10000000": {
      "wasm": "186.0",
      "ab": "640.0",
      "native": "949.0",
      "jsbase64": "1679.0"
    }
}
```

## Note
- Original C implementation from https://github.com/superwills/NibbleAndAHalf

## Todo
- input/error handling
- add tests
- publish to npm
