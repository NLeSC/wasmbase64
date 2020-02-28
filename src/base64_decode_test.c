#include "base64_decode.c"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "test_data.c"

int main() {
    for (int i=0; i<test_data_length; i++) {
        const char *input = test_data[i][1];
        const int input_length = strlen(input);
        const char *expected_output = test_data[i][0];
        
        const int output_size = get_output_size(input, strlen(input));

        char* mem = malloc(input_length + output_size);
        memcpy(mem, input, input_length);
        unbase64(mem, input_length);

        char * output = malloc(output_size + 1);
        memcpy(output, mem+input_length, output_size);
	output[output_size] = 0;
        if (strcmp(output, expected_output) == 0) {
            puts("test ok");
        } else {
            puts("test failed, expected\n");
            puts(expected_output);
            puts(" but got \n");
            puts(output);
        }

        free(mem);
    }

    return 0;
}
