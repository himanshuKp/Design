'use strict';

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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

/***************************The spread operator***************************/
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
----------------OPTIONAL CHAINING--------------
WITH optional chaining if something is not defined, undefined is return immediately*/

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH OPTIONAL CHAINING (?.)
console.log(restaurant.openingHours.mon?.open);

// we can have multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  // using nullish coallesing operator
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists.');

// ARRAYS
const users = [{ name: 'himanshu', email: 'himanshukp324@gmail.com' }];
const newUser = [];
console.log(users[0]?.name ?? `Users array empty`);
console.log(newUser[0]?.name ?? `New Users array empty`);

// console.log(restaurant);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// destructuring for-of
// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1}: ${element}`);
// }

// Coding Challenge #2

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// const [player1, player2] = game.players;
// // console.log(player1, player2);

// // 2
// const [gk, ...fieldPlayers] = player1;
// // console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...player1, ...player2];
// // console.log(allPlayers);

// // 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players} ${players.length} goals were scored`);
// };

// // printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`); //condition is false, so it does not proceed to part 2 of && operand

// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }
// OR
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// 2
// const odds = Object.values(game.odds);
// // console.log(odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average = average / odds.length;
// console.log(average);

// 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// restaurant.numGuests = 0; // 0 is a falsy value
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish (??):null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// SHORT CICRCUITING
// if a first operand is truthy then other operand will not be evaluated and it will result first operand
// console.log(3 || 'him'); //output: 3
// console.log('' || 'him'); //him
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || null || 0 || '' || 'hello' || 23); //short circuit and return true when reach at hello, js don't have to look any further

// SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // objects
// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(fri, weekdays);

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 4, 5, 6);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

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
