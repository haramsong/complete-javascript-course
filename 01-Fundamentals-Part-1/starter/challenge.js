let markMass = 78;
let markHeight = 1.69;
// let markMass = 95;
// let markHeight = 1.88;

let johnMass = 92;
let johnHeight = 1.95;
// let johnMass = 85;
// let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// let dolphinsAverage = (96 + 108 + 89) / 3;
// let dolphinsAverage = (97 + 112 + 101) / 3;
let dolphinsAverage = (97 + 112 + 101) / 3;

// let koalasAverage = (88 + 91 + 110) / 3;
// let koalasAverage = (109 + 95 + 123) / 3;
let koalasAverage = (109 + 95 + 106) / 3;

let winnerResult;
let score;
if (dolphinsAverage > koalasAverage) {
  winnerResult = 'Dolphins';
  score = dolphinsAverage;
} else if (dolphinsAverage < koalasAverage) {
  winnerResult = 'Koalas';
  score = koalasAverage;
} else {
  winnerResult = 'Draw';
  score = dolphinsAverage;
}

if (score <= 100) {
  winnerResult = 'Nobody'
}

console.log(winnerResult);

// let bill = 275;
// let bill = 40;
let bill = 430;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
let price = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${price}`);
