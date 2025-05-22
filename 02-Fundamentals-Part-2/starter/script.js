'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log('My name is Jonas');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

// Function declaration vs Function expression => 변수를 이전에 선언 가능함(declaration), 이전에 선언 불가함(expression)

console.log(age1, age2);

// Arrow function
// parameter 1개일 시, 괄호 필수 X, single line일 때, 중괄호 필수 X & 암묵적 return
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`

  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const newYears = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// calcAge(years);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
const popped = friends.pop();  // Last element
console.log(popped);
console.log(friends);

friends.shift();   // First element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));  // 없으면 -1 반환

friends.push(23);
console.log(friends.includes('Steven'));   // true
console.log(friends.includes('Bob'));  // false
console.log(friends.includes('23'));  // false -> strict type
console.log(friends.includes(23));  // true

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// Object literal syntax
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

// property의 순서는 중요하지 않음 -> 로그에서는 속성이 alphabetical order로 정렬
console.log(jonas);

// dot notation
console.log(jonas.lastName);
// brackets notation
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// 안됨
// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas.interestedIn);  // undefined
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const jonasBestFriend = jonas.friends[0]
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonasBestFriend}`);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
  }
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](jonas["birthYear"]));

console.log(jonas.calcAge());

console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');

for (let rep = 1; rep <= 8; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break;

console.log('--- Only Strings ---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- Break with number ---');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// 0 -> 4
// 4 -> 0?

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Starting exercise ${exercise} -----`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

*/

// for (let rep = 1; rep <= 8; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 8) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...')
}