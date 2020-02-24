	.text
	.file	"simple.c"
	.section	.text.add,"",@
	.hidden	add
	.globl	add
	.type	add,@function
add:
	.functype	add (i32, i32) -> (i32)
	local.get	1
	local.get	0
	i32.add 
	end_function
.Lfunc_end0:
	.size	add, .Lfunc_end0-add


	.ident	"clang version 8.0.1-4 (tags/RELEASE_801/final)"
