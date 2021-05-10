"use strict";

/* let qwe = Math.round(new Date().getTime()/1000.0);
console.log(qwe); */

const arr = [1, 21, 33, 4, 74, 9];
arr.sort(comp);
console.log(arr);

function comp(a, b) {
	return a - b;
}

/* arr.push(10);
arr.pop();

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}
 */

//  arr[99] = 0;

//  console.log(arr.length);

// console.log(arr);

arr.forEach(function(item, i, arr) {
	console.log(`${i} : ${item} внутри массива ${arr}`);
});

const str = prompt('', '');
const product = str.split(", ");
product.sort();
console.log(product.join('; '));