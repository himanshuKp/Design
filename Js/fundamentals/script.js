// let js = 'amazing';

// if (js === 'amazing') {
//     alert("JavaScript is FUN!");
// }

// sum = 40 + 30 - 39;
// console.log(sum);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 19);
console.log(Number(inputYear) + 19);
console.log(String(19));

//Nan
console.log(typeof NaN);

//type coercion
console.log("I am " + 27 + " years old.");

//negative operator triggers opposite coercion
console.log('23' - '10' - 3);   //10
console.log('24' > 18); //true

let n = '1' + 1;
n = n - 1;
console.log(n);