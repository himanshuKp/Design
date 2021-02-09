'use strict';

// function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1993);
// console.log(age2)

// anonymous function
// const age3 = birthYear => 2037 - birthYear;
// console.log(age3(1992));

// coding challenge
// const dolphinScore = [44, 23, 71];
// const koalasScore = [185, 54, 49];

// const calcAverage = score => calculateScoreTotal(score) / score.length;

// const koalaAverageScore = calcAverage(koalasScore);
// const dolphinAverageScore = calcAverage(dolphinScore);

// console.log("Koala average score: " +koalaAverageScore);
// console.log("Dolphin average score: " +dolphinAverageScore);

// function calculateScoreTotal(teamScore) {
//     var teamScoreSum = 0;

//     for (var i = 0; i < teamScore.length; i++) {
//         teamScoreSum += Number(teamScore[i]);
//     }

//     return teamScoreSum;
// }

// console.log(checkWinner(koalaAverageScore, dolphinAverageScore));

// function checkWinner(koalaAverageScore, dolphinAverageScore) {
//     if(koalaAverageScore > 2*dolphinAverageScore) {
//         return `Koalas win {${koalaAverageScore} vs. ${dolphinAverageScore}}`;
//     } else if (dolphinAverageScore > 2*koalaAverageScore) {
//         return `Dolphins win {${dolphinAverageScore} vs. ${dolphinAverageScore}}`;
//     } else {
//         return `It's a draw`;
//     }
// }

/*
const friends = ['abhishek','raj','himanshu'];
friends.push(22);
friends.push([true, false]);
const newLength = friends.push(4);  //find the length of the array 
console.log(friends);
console.log(newLength);
console.log(friends.includes('abhishek'));  //true if found in array, else false
console.log(friends.includes('Abhisehk'));  // use strict method ===
console.log(friends.includes('bob'));

console.log(friends.indexOf('himanshu'));   // find index of passed element in array
console.log(friends.indexOf('Himanshu'));   // use strict comparison, return -1 if not matched or found
*/

// tip calculator challenge

// const bills = [125, 555, 44];
// const tips = [];
// const total = []

// calculateTips(bills);

// calculateTotal(bills, tips);

// console.log("Bills: "+bills);
// console.log("Tips: "+tips);
// console.log("Total bill: "+total);

// function calcTip(billTotal) {
//     var billWithTip =  0;
//     if(billTotal >= 50 && billTotal <=300){
//         billWithTip = billTotal*0.15;
//     } else {
//         billWithTip = billTotal*0.20;
//     }
//     return billWithTip;
// }

// function calculateTips(bills){
//     for(var i=0;i<bills.length;i++){
//         var tipValue = 0;
//         tipValue = calcTip(bills[i]);
//         tips.push(tipValue);
//     }
// }

// function calculateTotal(bills, tips){
//     for(var i=0;i<bills.length;i++){
//         for(var j=0;j<tips.length;j++){
//             if(i === j){
//                 total.push(Number(bills[i])+Number(tips[j]));
//             }            
//         }
//     }
// }

//object 
// const himanshu = {
//     firstName: 'himanshu',
//     lastName: 'kandpal',
//     birthYear: 1993,
//     age: 30,
//     role: 'teacher',
//     friends: ['abhishek', 'himanshu'],
//     hasDriverLicence: true,

//     calcAge: function (){
//         this.age = 2021 - this.birthYear;
//         // return 2021 - this.birthYear;
//         // return this.age;
//     }
// }

// himanshu['twitter'] = `@himanshukp`;
// console.log(himanshu.calcAge());

// console.log(`${himanshu.firstName} is a ${himanshu.age} year old, and he has ${himanshu.hasDriverLicence ? "a": "no"} driver's licence.`);

// using dot notation
// console.log(himanshu.calcAge(`${himanshu.birthYear}`));


// using brackets
// console.log(himanshu['calcAge'](`${himanshu.birthYear}`));
// console.log(himanshu['calcAge']());

// console.log(himanshu.age);

// dot notation to get value from object
// console.log(himanshu.lastName);

// bracket notation
// here we can use any expression we like
// console.log(himanshu['lastName']);

// const nameKey = 'Name';
// console.log(himanshu[`first`+nameKey]);
// console.log(himanshu[`last`+nameKey]);

// const interestedIn = prompt(`What do you want to know about ${himanshu.firstName}. Choose firstName, lastName, age, role or friends`);
// console.log(himanshu[interestedIn]);
// if(himanshu[interestedIn]){
//     console.log(himanshu[interestedIn]);
// } else {
//     console.log('No such property');
// }
// adds twitter as key and @himanshukp as value to object himanshu

// console.log(himanshu);

// find the first name in the friends in object himanshu
// console.log(`${himanshu.firstName} has ${himanshu.friends.length} friends, and his best friend is called ${himanshu.friends[0]}.`);




