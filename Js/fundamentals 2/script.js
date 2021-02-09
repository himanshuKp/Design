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

const friends = ['abhishek','raj','himanshu'];
friends.push(22);
friends.push([true, false]);
console.log(friends);