let num = 42432;

function reverseNumber(num) {
  let reverse = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reverse;
}

let output = reverseNumber(num);
console.log(output);
