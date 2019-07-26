/**
 * Sorting elements
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const compare = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
numbers.sort(compare);
console.log(numbers);

// Custom sorting
const friends = [{
    name: 'John',
    age: 30
  },
  {
    name: 'Ana',
    age: 20
  },
  {
    name: 'Chris',
    age: 25
  }
]

const comparePerson = (a, b) => {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));

// Sorting strings
let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

console.log(names.sort((a, b) => {
  if(a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if(a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}));

console.log(names.sort((a, b) => a.localeCompare(b)));