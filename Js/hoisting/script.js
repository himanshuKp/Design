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
