let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length + 1;
let total = (n * (n + 1)) / 2;
let Sum = arr.reduce((acc, num) => acc + num, 0);
let res = total - Sum;
console.log(res);
