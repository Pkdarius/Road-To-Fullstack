/**
 * ECMAScript 6 and new array functionalities
 */

// Iterating using the for...of loop
const numbers = [-3, -2, -1, 0, 1, 2, 3];
for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

// Using the @@iterator object
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);

for (const n of iterator) {
  console.log(n);
}

// Array entries, keys, and value
let aEntries = numbers.entries();
console.log(aEntries.next().value);
for (const n of aEntries) {
  console.log(n);
}

let aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

let aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

// Using the form method
let numbers2 = Array.from(numbers);
let evens = Array.from(numbers, x => (x % 2 === 0));
console.log(numbers2, evens);

// Using the Array.of method
let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4);

let numbersCopy = Array.of(...numbers4);
console.log(numbers3, numbers4, numbersCopy);

// Using the fill method
let numbersCopy2 = Array.of(1, 2, 3, 4, 5, 6);
numbersCopy2.fill(0);
console.log(numbersCopy2);

numbersCopy2.fill(2, 1);
console.log(numbersCopy2);

numbersCopy2.fill(1, 3, 5);
console.log(numbersCopy2);

let ones = Array(6).fill(1);
console.log(ones);

// Using the copyWithin method
let copyArray = [6, 5, 1, 4, 2, 3];
copyArray.copyWithin(1, 2);
console.log(copyArray);

copyArray.copyWithin(1, 3, 5);
console.log(copyArray);
