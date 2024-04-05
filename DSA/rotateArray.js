let arr = [3, 8, 9, 2, 5];

let k = 2 % arr.length;
let res = arr.splice(arr.length - k, arr.length);
arr.unshift(...res);

console.log(arr);
