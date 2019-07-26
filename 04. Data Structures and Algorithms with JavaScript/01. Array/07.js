/**
 * Searching
 */

const numbers = [0, 1, 2, 3, 4, 5, 6];
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(10));

numbers.push(10);
console.log(numbers.lastIndexOf(10));

// ECMAScript 2015 - the find and findIndex methods

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const multipleOf13 = (element, index, array) => {
  return (element % 13 == 0);
}

console.log(numbers2.find(multipleOf13));
console.log(numbers2.findIndex(multipleOf13));

// ECMAScript 2016 - using the includes method
console.log(numbers2.includes(15));
console.log(numbers2.includes(20));

console.log(numbers2.includes(1, 3));

// Outputting the array into a string
console.log(numbers.toString());
console.log(numbers.join('-'));