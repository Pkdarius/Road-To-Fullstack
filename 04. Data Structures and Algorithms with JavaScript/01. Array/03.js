/**
 * Adding elements
 */

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Inserting an element at the end of the array
numbers[numbers.length] = 10;

// Using the push method
numbers.push(11);
numbers.push(12, 13);

// Inserting an element in the first position
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}
numbers.insertFirstPosition(-1);

// Using the unshift method
numbers.unshift(-2);
numbers.unshift(-4, -3);

/**
 * Removing elements
 */

// Removing an element from the end of the array
numbers.pop();

// Removing an element form the first position
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if(myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

// Using the shift method
numbers.shift();

// Adding and removing elements from a specific position
numbers.splice(0, 3);

numbers.splice(0, 0, -2, -1, 0);

console.log(numbers);