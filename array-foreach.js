"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrawed ${Math.abs(movement)}`);
  }
}

console.log("______FOREACH_______");

movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrawed ${Math.abs(mov)}`);
  }
});

console.log("________ Array Map _________");

const curriencies = new Map([
  ["USD", "United State Dollar"],
  ["Kyat", "Myanmar Kyat"],
  ["Baht", "Thailand Baht"],
  ["EUR", "Euro"],
]);
curriencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

console.log("_______ Array Set ________");

const currencyUnique = new Set([
  "USD",
  "United State Dollar",
  "Kyat",
  "Myanmar Kyat",
  "Baht",
  "Thailand Baht",
  "EUR",
  "Euro",
]);
console.log(currencyUnique);

currencyUnique.forEach((key, value) => {
  console.log(`${value}`);
});
