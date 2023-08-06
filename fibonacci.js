let num = 6;

function fibonacci(num) {
  let t1 = 0;
  let t2 = 1;
  let next = 0;

  for (let i = 0; i < num; i++) {
    console.log(t1);
    next = t1 + t2;
    t1 = t2;
    t2 = next;
  }
}

let output = fibonacci(num);
