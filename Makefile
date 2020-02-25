# the compiler to use
CC = clang

# compiler flags:
#  -g    adds debugging information to the executable file
#  -Wall turns on most, but not all, compiler warnings
CFLAGS  = -g -Wall
  
#files to link:
# LFLAGS = -lcs50
  
# the name to use for both the target source file, and the output file:
# TARGET = hello


all: base64_encode_test base64_encode.wasm
test: base64_encode_test

base64_encode_test: base64_encode_test.c ; $(CC) $(CFLAGS) -o base64_encode_test base64_encode_test.c $(LFLAGS)
base64_encode.wasm: base64_encode.c ; clang-11 -fuse-ld=/usr/bin/wasm-ld-11 --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o base64_encode.wasm base64_encode.c