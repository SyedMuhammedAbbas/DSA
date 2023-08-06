let num = 7;

var solution = function (num) {
  let count = 1;
  let result = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < count; j++) {
      result += "*";
    }
    result += "\n";
    count++;
  }
  return result;
};

let output = solution(num);
console.log(output);
