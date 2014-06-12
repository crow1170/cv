function fib(n){
/* Returns nth Fibonacci Number http://oeis.org/A000045
 * or 0 or NaN for errors
 */
	smallFib = [0, 1, 1];
	if(isNaN(n)){
		return NaN;
	}
	if(n < 1){
		return(0);
	}
	if(n < 3){
		return smallFib[n-1];
	}
	n = n-2;
	numT = 1;
	num1 = 0;
	num2 = 1;
	while(n > 0) {
		numT = num2;
		num2 = num1 + num2;
		num1 = numT;
		n = n - 1;
	}
	return num2;
}

/* Examples
print(fib(4)); // 2
print(fib(-33)); // 0
print(fib('a')); // NaN
print(fib(22)); // 10946
 */
