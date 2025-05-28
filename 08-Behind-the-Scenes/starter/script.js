'use strict';

/*
// Variable environment
// Scope
// Variable lookup

// Hoisting -> 실제 선언 전에 function 사용.
// TDZ -> Cannot access 'variable' before initialization, 이미 읽었다는 것을 알고 있음. 에러를 잡기에 용이해지고 const를 실제 예상한 대로 작동할 수 있게 해줌

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // Still Jonas
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';

      output = 'NEW OUTPUT!';

      // firstName is Steven
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // let, const are block scoped
    // console.log(str);
    // Var variable is function scoped
    console.log(millenial);
    // function is block scoped only in strict mode -> if strict mode turned off, it can be called
    // console.log(add(2, 3));

    // NEW OUTPUT! -> if let, inner scope output manipulated output
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


console.log(me);  // undefined
// console.log(job); // TDZ
// console.log(year); // TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));   // TDZ
// console.log(addArrow(2, 3));  // TDZ
console.log(addExprVar);  // undefined
// console.log(addExprVar(2, 3));  // is not a function
// console.log(addArrowVar(2, 3));  // is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
  return a + b;
}

var addArrowVar = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();  // hoisting 되었지만 undefined이기 때문에 deleteShopingCart가 동작함.

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// var creates property on window object
console.log(x === window.x);   // true
console.log(y === window.y);   // false
console.log(z === window.z);   // false

console.log(this);  // window object(browser)

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);  // undefined
}
calcAge(1991);

// Arrow function는 자기 자신의 this 키워드를 가지지 않고 부모의 this keyword를 가져옴
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);  // window object -> lexical this keyword(부모의 this keyword를 가져옴)
}
calcAgeArrow(1990);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);  // object
    console.log(2037 - this.year);
  }
}
jonas.calcAge();

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge;
// this keyword가 matilda를 가리킴.
matilda.calcAge();  // 20

const f = jonas.calcAge;
console.log(f);
console.log(f());  // Cannot read property 'year' of undefined, this도 undefined가 됨(단순 function 이기 때문에)


// var를 사용 하면 안되는 이유
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);  // object
    console.log(2037 - this.year);

    // const isMillenial = function () {
    //   console.log(this);   // undefined
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    // Solution 1: 변수 할당하여 variable lookup 이용
    const self = this;
    const isMillenial = function () {
      console.log(self);   // jonas object
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();

    // Solution 2: Arrow function 사용
    const isMillenialArrow = () => {
      console.log(this);   // jonas object(부모의 this 키워드를 가져옴)
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenialArrow();
  },
  // Arrow function은 method로 사용하면 안되는 이유
  greet: () => console.log(`Hey ${this.firstName}`),
}
jonas.greet();  // Hey undefined
// jonas.greet();  // Hey Matilda 'var가 선언되면 window.firstName이 생성되고 Matilda 값이 할당되기 때문에 가능'
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);     // Arguments(2) [2, 5]
addExpr(2, 5, 8, 12);  // Arguments(4) [2, 5, 8, 12]

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b
};

addArrow(2, 5, 8);  // arguments is not defined

*/

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis')

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log(jessica1);
console.log(marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// console.log(jessica, jessicaCopy);
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before: ', jessica);
// console.log('After: ', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);

jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before: ', jessica);
console.log('After: ', jessicaClone);