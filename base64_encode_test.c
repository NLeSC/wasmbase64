#include "base64_encode.c";


#include <stdio.h>
#include <stdlib.h>
#include <string.h>


const static char* b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" ;

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

void main() {
    int len = 100000;
    char* mem = malloc((int)(64 + 256 + len*2.4));
    memcpy(mem, b64, 64);
    memcpy(mem + 64, unb64, 256);
    char str[100000] = "testj";
    memcpy(mem+64+256, str, len);
    printmem(mem, 256+64 + 6);

    int l = base64(mem, mem + 256 + 64, len);
    // unbase64(mem + len, l);
    // printmem(mem, 2*len + l);
}