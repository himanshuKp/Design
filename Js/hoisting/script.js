"use strict";
// console.log(me); //undefined
// console.log(job); //uninitialzed error

// var me = "him";
// let job = "engineer";
/*
console.log(addNum(2, 3));
// console.log(addExpr(2, 3)); //can't access lexical declaration 'addExpr' before initialization
// console.log(addArrow(2, 3)); //can't access lexical declaration 'addArrow' before initialization

function addNum(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  //if used var, it shows that addExpr is not a function
  return a + b;
};

// var addArrow = (a, b) => a + b; //addArrow is not a function
const addArrow = (a, b) => a + b;
*/

/*
if (!numProducts) {
  deleteShoppingCart(); //this will execute because of hoisting as, var is undefined in if loop which satisfy condition and is not an error
}

//can't access lexical declaration 'numProduct' before initialization
if (!numProduct) {
  deleteShoppingCart();
}

var numProducts = 10;
const numProduct = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}
*/

// var x = 1;
// const y = 2;
// let z = 3;

// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2014 - birthYear);
//   console.log(this); //undefined
// };

// console.log(calcAge(1994)); //undefined

// const calcAged = (birthYear) => {
//   console.log(2014 - birthYear);
//   console.log(this); //window
// };

// console.log(calcAged(1994));

// const him = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this); //point to the function object
//   },
// };

// him.calcAge();

// const him = {
//   year: 1993,
//   calcAge: function () {
//     console.log(2047 - this.year); //point to the year in object
//   },
// };

// const par = {
//   year: 1994,
// };

// par.calcAge = him.calcAge;
// console.log(him);
// par.calcAge(); //function of him is copied to par

// const f = him.calcAge; //this will not work because f is not linked to any object
// f();

// var firstName = "hImanshu";

// const jonas = {
//   firstName: "Jonas",
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);

//     // // pre ES6 solution
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(this); //inside a regular function call, this keyword is undefined.
//     //   console.log(self); //through scope chain, self is defined as this keyword
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     //ES6 solution
//     const isMillenial = () => {
//       //arrow function inherits this keyword from the parent scope
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(this), //points to global window object
//   greeting: () => console.log(this.firstName),
//   greeter: function () {
//     console.log(this.firstName);
//   },
// };

// jonas.greet(); //Hey undefined (arrow function does not get its own this keyword)

// // console.log(this.firstName); //we dont get error, output: undefined
// jonas.greeting(); //output: himanshu

// jonas.greeter(); //output: jonas

// variable created with var creates global object

// jonas.calcAge();

// const addExpr = function () {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   console.log(total);
// };

// addExpr(2, 3, 3, 3, 3, 3, 3);

// const addArrow = (a, b) => {
//   console.log(arguments); //error: Uncaught ReferenceError: arguments is not defined
//   return a + b;
// };

// addArrow(2, 3, 5);

// const friend = {
//   name: "Jonas",
//   age: 30,
// };

// const me = friend;
// me.age = 27;
// console.log(`Friend: ${friend.age}`); // 27
// console.log(`Mine age: ${me.age}`); // 27

// const prat = {
//   fistname: "prat",
//   lastname: "sharma",
//   age: 25,
// };

// // const marriedPrat = prat;    //does not create new object
// // copy one object to another object and creates a new copy and point to new reference in heap and callstack
// const marriedPrat = Object.assign({}, prat);

// marriedPrat.lastname = "joshi";

// console.log("Before marriage: ", prat);
// console.log(`After marriage: `, marriedPrat);
