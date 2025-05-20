/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $jonas = "Jonas";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

// 정상적으로 동작
let string;
let number;
let boolean;
let object;
console.log(typeof string);

// Already defined error
let undefined;

// Unexpected token error
// let new;
// let null;
console.log(typeof undefined);

// typeof null -> object : 버그
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;  // 15
x += 10;  // x = x + 10;
console.log(x);

console.log(ageJonas > ageSarah);

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
// <-  <-  Assignment : right-to-left
x = y = 25 - 10 - 5;  // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge);

const age = 18;
if (age === 18) console.log('You just became an adult :D');

// '18' == 18  true
// '18' === 18 false

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite === 23) console.log('Cool! 23 is an amazing number!')
else if (favorite === 7) console.log('Cool! 7 is also a cool number.');
else console.log('Number is not 23 or 7');

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

const isTired = true;

if (shouldDrive && !isTired) console.log('Sarah is able to drive!');
else console.log('Someone else should drive...');

const day = 'wednesday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

// expression
3 + 4
1991
true

// statement
const x = 3 + 4;

if (1991) {
  console.log('1991');
}

*/

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
console.log(`I like to drink ${drink}`);
