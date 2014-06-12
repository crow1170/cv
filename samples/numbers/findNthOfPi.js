/* findNthOfPi()
 * returns the nth digit of pi
 * only works for [1,16], returns
 * NaN for anything illegal
 */
 
  function findNthOfPi(n){
    if(isNaN(n) || n < 1 || n > 16){
      return NaN;
    }
    n = Math.floor(n);
    pi = (Math.PI /10) + ''; // 0.3141
    return pi.substr(n+1, 1);
  }

 print(findNthOfPi(4)); // 1
 print(findNthOfPi('a')); // NaN
 print(findNthOfPi(-12)); // NaN
 print(findNthOfPi(12)); // 8
