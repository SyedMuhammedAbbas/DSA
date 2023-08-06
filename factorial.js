let num = 6;

function factorial(num) {
  let fac = 1;
  for (let i = 2; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

let output = factorial(num);

console.log(output);
