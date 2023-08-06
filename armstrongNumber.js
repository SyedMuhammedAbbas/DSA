let num = 153;

function armStrong(num) {
  let exponent = Math.ceil(Math.log10(num));
  let tempNum = num;
  let lastDigit = 0;
  let armStrongNum = 0;

  while (tempNum > 0) {
    lastDigit = tempNum % 10;
    armStrongNum += Math.pow(lastDigit, exponent);
    tempNum = Math.floor(tempNum / 10);
  }

  if (num === armStrongNum) {
    return "ArmStrong Num";
  } else {
    return "Not an ArmStrong Num";
  }
}

let output = armStrong(num);

console.log(output);
