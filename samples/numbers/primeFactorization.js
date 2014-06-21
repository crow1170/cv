/* primeFactorization
 * finds prime factors of s
 */
  
  function factor(s){
    for(i = 2; i < s; i++){
      // for each whole number between 1 and s
      if(s%i === 0){ // if i is a factor of s
        // return i and the next factor
        return i + ", " + factor(s/i);
      }
    }
    // nothing in (1..s) is a factor of s, s is prime
    return s;
  }
  
 /* Examples
  print(factor(99)); //3, 3, 11
  print(factor(987654321)); //3, 3, 17, 17, 379721
  print(factor('a')); // a
  print(factor(8675309)); //8675309
  */
