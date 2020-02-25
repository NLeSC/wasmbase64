#include "base64_encode.c"


#include <stdio.h>
#include <stdlib.h>
#include <string.h>




// maps A=>0,B=>1..
const static unsigned char unb64[]={
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //10 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //20 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //30 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //40 
  0,   0,   0,  62,   0,   0,   0,  63,  52,  53, //50 
54,  55,  56,  57,  58,  59,  60,  61,   0,   0, //60 
  0,   0,   0,   0,   0,   0,   1,   2,   3,   4, //70 
  5,   6,   7,   8,   9,  10,  11,  12,  13,  14, //80 
15,  16,  17,  18,  19,  20,  21,  22,  23,  24, //90 
25,   0,   0,   0,   0,   0,   0,  26,  27,  28, //100 
29,  30,  31,  32,  33,  34,  35,  36,  37,  38, //110 
39,  40,  41,  42,  43,  44,  45,  46,  47,  48, //120 
49,  50,  51,   0,   0,   0,   0,   0,   0,   0, //130 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //140 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //150 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //160 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //170 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //180 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //190 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //200 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //210 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //220 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //230 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //240 
  0,   0,   0,   0,   0,   0,   0,   0,   0,   0, //250 
  0,   0,   0,   0,   0,   0, 
}; // This array has 256 elements

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
    char input[] = "this is a test";
    int input_length = strlen(input);

    int output_size = get_output_size(input_length);
    char* mem = malloc(input_length + output_size);
   
    memcpy(mem, input, input_length);
    base64(mem, input_length);

    printmem(mem + input_length, output_size);

    return 0;
}