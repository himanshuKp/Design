"use strict";

/*----------------- Destructuring Array ----------------*/
// const restraunt = {
//   name: "Classico italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // this can also be save as below
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr); //not destroying the original array

// const [first, second] = restraunt.categories;

// this will skip the second element in array and save the first and third element
// const [first, , second] = restraunt.categories;

// console.log(first, second);

// let [main, , secondary] = restraunt.categories;

// switch element
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// reassign variable (alternate)
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

/******************************Destructuring Objects******************************/
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thur: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "22:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Gali no 13, Paratha wali gali",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "sector -4, vasundhara",
// });

// to destructure object we use curly braces
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// rename variables
// const {
//   name: restaurantName,
//   openingHours: hourse,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hourse, tags);

// setting a default value if property not found
// default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// if we dont use empty array as menu = [], it will show undefined
// const { menu, starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// need to contain in curly braces
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// console.log(orderDelivery);

/***************************The spread operator***************************/
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr); //Array(5) [ 1, 2, 7, 8, 9 ]
// console.log(...newArr); //1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
// const str = "James";
// const letters = [...str];
// console.log(letters);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients); //Here is your delicious pasta with 2, 3 and 4

// since ES2018 spread operator also works on objects
// create shallow copy [Shallow Copy: It makes a copy of the reference to X into Y.
// Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same
// i.e. they will be pointing to the same memory location.]
// const newRestaurant = { ...restaurant, founder: "Guiseppe" };

// console.log(newRestaurant);
// newRestaurant.name = "himanshu p";
// console.log(newRestaurant.name);
// console.log(restaurant.name);
