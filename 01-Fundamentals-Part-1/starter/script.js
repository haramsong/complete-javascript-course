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
*/

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