#include "base64_decode.c"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printmem(void* from, int len) {
    char *res = malloc(len + 1);
    memcpy(res, from, len);
    for (int i=0; i<len; i++) {
        if (res[i] == 0) {
            res[i] = '0';
        }
    }
    res[len+1] = 0;
    puts(res);
    free(res);
}

int main() {
    char input[] = "dGVzdGplCg==";
    int input_length = strlen(input);

    int output_size = get_output_size(input, input_length);
    char* mem = malloc(input_length + output_size);
   
    memcpy(mem, input, input_length);
    unbase64(mem, input_length);

    printmem(mem + input_length, output_size);

    return 0;
}