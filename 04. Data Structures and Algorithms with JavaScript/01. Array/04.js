/**
 * Two-dimensional and multi-dimensional arrays
 */

let averageTempDay1 = [72, 75, 79, 79, 71, 71];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 71, 71];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

// Iterating the elements of two-dimensional arrays
function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrix(averageTemp);

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}
console.log(matrix3x3x3);

// Joining multiple arrays
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

// Iterator functions 
const isEven = x => x % 2 === 0;

// Iterating using the every method
console.log(numbers.every(isEven));

// Iterating using the some method
console.log(numbers.some(isEven));

// Iterating using forEach
numbers.forEach(x => console.log(x % 2 === 0));

// Using map and filter
const myMap = numbers.map(isEven);
console.log(myMap);

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// Using the reduce method
numbers.reduce((previous, current) => previous + current);