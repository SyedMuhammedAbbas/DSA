let n = 8;

function primeNumber(n) {
  let flag = false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = true;
      return "Not Prime";
    }
  }
  if (!flag) {
    return "Prime Number";
  }
}

let output = primeNumber(n);

console.log(output);
