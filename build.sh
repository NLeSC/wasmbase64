#clang --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o base64.wasm base64.c
clang-11 -fuse-ld=/usr/bin/wasm-ld-11 --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o base64.wasm base64_encode.c
