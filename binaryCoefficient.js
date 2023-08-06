// ncr = n! / (n-r)! * r!

let n = 5;
let r = 2;

function factorial(num) {
  let fac = 1;
  for (let i = 2; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

let nFactorial = factorial(n);
let rFactorial = factorial(r);
let nMinusRFactorial = factorial(n - r);

function nCr(nFactorial, rFactorial, nMinusRFactorial) {
  let ncr = nFactorial / (nMinusRFactorial * rFactorial);

  return ncr;
}

let output = nCr(nFactorial, rFactorial, nMinusRFactorial);

console.log(output);
