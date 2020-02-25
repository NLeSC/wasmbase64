all: base64_encode_test base64_encode.wasm base64_decode.wasm
test: base64_encode_test base64_decode_test

base64_encode_test: base64_encode_test.c ; clang-11 -g -Wall -o base64_encode_test base64_encode_test.c
base64_encode.wasm: base64_encode.c ; clang-11 -Wall -fuse-ld=/usr/bin/wasm-ld-11 --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o base64_encode.wasm base64_encode.c

base64_decode_test: base64_decode_test.c ; clang-11 -g -Wall -o base64_decode_test base64_decode_test.c
base64_decode.wasm: base64_decode.c ; clang-11 -Wall -fuse-ld=/usr/bin/wasm-ld-11 --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o base64_decode.wasm base64_decode.c

clean:
	rm base64_decode_test base64_decode.wasm base64_encode_test base64_encode.wasm || true