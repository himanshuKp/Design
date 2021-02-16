"use strict";

/*----------------- Destructuring Array ----------------*/
const restraunt = {
  name: "Classico italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// this can also be save as below
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); //not destroying the original array

// const [first, second] = restraunt.categories;

// this will skip the second element in array and save the first and third element
// const [first, , second] = restraunt.categories;

// console.log(first, second);

let [main, , secondary] = restraunt.categories;

// switch element
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// reassign variable (alternate)
[secondary, main] = [main, secondary];
console.log(main, secondary);
