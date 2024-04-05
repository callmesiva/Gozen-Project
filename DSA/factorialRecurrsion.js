const n = 5;
const res = factorial(n);
console.log(res);

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
