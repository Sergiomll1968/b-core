// const myArray = [1, 2, 3, 4];

// const response = myArray.at(2);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 3

// const response = myArray.pop();
// console.log('myArray', myArray);
// // [1, 2, 3]
// console.log('response', response);
// // 4

// const response = myArray.push(5);
// console.log('myArray', myArray);
// // [1, 2, 3, 4, 5]
// console.log('response', response);
// // 5 === es el length

// const response = myArray.fill(6);
// console.log('myArray', myArray);
// // [6, 6, 6, 6]
// console.log('response', response);
// // [6, 6, 6, 6]

// const response = myArray.join('');
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // '1234'

// const response = myArray.shift();
// console.log('myArray', myArray);
// // [2, 3, 4]
// console.log('response', response);
// // 1

// const response = myArray.unshift(0);
// console.log('myArray', myArray);
// // [0, 1, 2, 3, 4]
// console.log('response', response);
// // 5

// const response = myArray.reverse();
// console.log('myArray', myArray);
// // [4, 3, 2, 1]
// console.log('response', response);
// // [4, 3, 2, 1]

// const response = myArray.includes(3);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // true


// With callback


// const response = myArray.map(function(item) {
//   return item * 2;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // [2, 4, 6, 8]

// const response = myArray.find(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 2

// const response = myArray.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // [2, 4]

// const response = myArray.every(function(item) {
//   return item > 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // true

// const response = myArray.findIndex(function(item) {
//   return item % 2 === 0;
// });
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 1

// const initialItem = 5;
// const response = myArray.reduce(function(lastReturnedItem, item) {
//   return lastReturnedItem + item;
// // });
// }, initialItem);
// console.log('myArray', myArray);
// // [1, 2, 3, 4]
// console.log('response', response);
// // 10
// // 15

// Dará error en push()
// document.write(new Array([9, 7, 3, 1, 8, 5].shift()).pop().push(2).filter(function(number) {
//   return number >= 5;
// }).map(function(item) {
//   return item === 5;
// }).join('f'));

// Sí funciona
document.write([[['jona','cat','woman','bota','boludo',99].map(function(quilombo) {
  return quilombo + 1;
}).unshift('sergio')].reverse().includes('cat')].fill(0).fill('H').fill('X').shift());
