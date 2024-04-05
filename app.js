function addNumber(num1, num2) {
  return num1 + num2;
}
addNumber(5, 6);
console.log(addNumber(5, 6));

function addArrayNumbers(a = 5, b = 9) {
  return a + b;
}
let value = [addArrayNumbers()];
console.log(value);

function findMax() {
  let array = [15, 20, 40];
  let find = Math.max(...array);
  console.log(find);
}

findMax();
