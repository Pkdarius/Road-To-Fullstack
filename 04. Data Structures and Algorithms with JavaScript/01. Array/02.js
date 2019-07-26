/**
 * Accessing elements and iterating an array
 */

daysOfWeek = ['Monday', 'Tuesday'];
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

for (let i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}