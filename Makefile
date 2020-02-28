CC := clang-11
CFLAGS := -Wall --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all
LINKER := wasm-ld-11

SRC_DIR := src
OUT_DIR := $(SRC_DIR)/out
DIST_DIR := dist

dist: $(DIST_DIR)/base64.mjs

wasm: $(OUT_DIR)/base64_encode.wasm $(OUT_DIR)/base64_decode.wasm

all: $(OUT_DIR)/base64_encode_test $(OUT_DIR)/base64_encode.wasm $(OUT_DIR)/base64_decode.wasm

test: $(OUT_DIR)/base64_encode_test $(OUT_DIR)/base64_decode_test

$(OUT_DIR)/base64_encode_test: $(SRC_DIR)/base64_encode_test.c
	$(CC) -g -Wall -o $(OUT_DIR)/base64_encode_test $(SRC_DIR)/base64_encode_test.c

$(OUT_DIR)/base64_decode_test: $(SRC_DIR)/base64_decode_test.c
	$(CC) -g -Wall -o $(OUT_DIR)/base64_decode_test $(SRC_DIR)/base64_decode_test.c

$(OUT_DIR)/base64_encode.wasm: $(SRC_DIR)/base64_encode.c
	$(CC) $(CFLAGS) -o $(OUT_DIR)/base64_encode.wasm $(SRC_DIR)/base64_encode.c
$(OUT_DIR)/base64_decode.wasm: $(SRC_DIR)/base64_decode.c
	$(CC) $(CFLAGS) -o $(OUT_DIR)/base64_decode.wasm $(SRC_DIR)/base64_decode.c

$(DIST_DIR)/base64.mjs: $(OUT_DIR)/base64_encode.wasm $(OUT_DIR)/base64_decode.wasm
	export decode_uint8=$$(cat $(OUT_DIR)/base64_decode.wasm | od -t u1 -v -w1 | awk '{print $$2}' | sed -z 's/\n/,/g' | sed 's/,*$$//g' ); \
	export encode_base64=$$(cat $(OUT_DIR)/base64_encode.wasm | base64 -w0 ); \
 	cat $(SRC_DIR)/base64.mjs.template | envsubst > $(DIST_DIR)/base64.mjs

clean:
	rm -f $(DIST_DIR)/base64.mjs $(OUT_DIR)/base64_encode.wasm $(OUT_DIR)/base64_decode.wasm $(OUT_DIR)/base64_decode_test $(OUT_DIR)/base64_encode_test
