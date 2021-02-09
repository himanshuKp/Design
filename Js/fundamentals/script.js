// let js = 'amazing';

// sum = 40 + 30 - 39;
// console.log(sum);

// let firstName = "josan";
// console.log(firstName);

// let $firstName = "kp";
// console.log($firstName);

// console.log(true);

// let javaScript = true;
// console.log(javaScript);

// // console.log(typeof(true));

// javaScript = "String value";
// console.log(javaScript);

// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// const now = 2021;
// const ageJonas = now - 1991;
// const ageSarah = now - 1994;
// console.log(ageJonas / 2);

// console.log(typeof null); //object
// console.log(ageJonas > ageSarah); //true or false

// coding challenge 1
// ------------------------------------
// heights in meters
// const markHeight = 1.69;
// const johnHeight = 1.95;

// // weight in kg
// const markWeight = 78;
// const johnWeight = 92;

// const markBMI = markWeight/(markHeight**2);
// const johnBMI = johnWeight/(johnHeight**2);

// const markHigherBMI = markBMI > johnBMI;
// console.log("Is mark bmi higher than john bmi: "+markHigherBMI);

const dolphinScore = [97,112,101];
const koalasScore = [109,95,106];

const avgScoreDolphins = (dolphinScore[0]+dolphinScore[1]+dolphinScore[2])/dolphinScore.length;
const avgScoreKoalas = (koalasScore[0]+koalasScore[1]+koalasScore[2])/koalasScore.length;

const koalaScoreConditioned = findScoredMoreThan100(koalasScore);
const dolphinScoreConditioned = findScoredMoreThan100(dolphinScore);

const calculateKoalaCondtionedAvgScore = calculateAverageSum(koalaScoreConditioned)/koalaScoreConditioned.length;
const calculateDolphinCondtionedAvgScore = calculateAverageSum(dolphinScoreConditioned)/dolphinScoreConditioned.length;

console.log("Koala average score: "+calculateKoalaCondtionedAvgScore);
console.log("Dolphin average score: "+calculateDolphinCondtionedAvgScore);

if(calculateDolphinCondtionedAvgScore > calculateKoalaCondtionedAvgScore){
    console.log("Dolphin team wins");
} else if (calculateDolphinCondtionedAvgScore === calculateKoalaCondtionedAvgScore) {
    console.log("It's a draw");
} else {
    console.log("Koala wins")
}

function findScoredMoreThan100(teamScore){
    var scoreConditioned = [];

    for(var i=0; i<teamScore.length ; i++){
        if(teamScore[i]>100){
            scoreConditioned.push(Number(teamScore[i]));
        }
    }

    return scoreConditioned;
}

function calculateAverageSum(scoreTeamConditioned){
    var scoreConditionedSum = 0;

    for(var i=0;i<scoreTeamConditioned.length;i++){
        scoreConditionedSum += Number(scoreTeamConditioned[i]);
    }
    
    return scoreConditionedSum;
}
