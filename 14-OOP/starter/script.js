'use strict';


// Constructor function [Person()]
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to do
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
}

// Object [jonas]
const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.hey = function () {
  console.log('Hey there 👋');
}
Person.hey();
// jonas.hey();   // jonas.hey is not a function

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1974);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes -> NOT of Person, but objects created by Person(new Person())
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

// {} linked to prototype -> sets __proto__ on the object of the constructor
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);  // true
console.log(jonas.constructor === Person);          // true

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));   // false

Person.prototype.species = 'Homo Sapiens';
// jonas.__proto__ === Person.prototype
console.log(jonas.__proto__.species, matilda.species);

// jonas에 hasOwnProperty가 가능한 이유? jonas -> Person -> Object 이고, Object prototype에 hasOwnProperty 메서드가 있기 때문
console.log(jonas.hasOwnProperty('firstName'));  // true
console.log(jonas.hasOwnProperty('species'));    // false

// Object[jonas] (.__proto__)-> Person (.__proto__)-> Object()  Prototype chain
console.log(Person.__proto__);  // [Object()]

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);  // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];  // new Array === []
console.log(arr.__proto__);  // 각 배열은 Array.prototype 을 상속 받음
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);  // Object()

// Extending the prototype is not recommended on primary, but possible
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());  // [3, 6, 4, 5, 9]

const h1 = document.querySelector('h1');


// class expression
// const PersonCE = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property, not in the objects
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Property 처럼 보이지만 메서드임
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    // this._~~
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods -> Not attached in prototypes, only in constructors
  static hey() {
    console.log('Hey there 👋');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge();
// Property 처럼 사용 가능
console.log(jessica.age);
console.log(jessica.fullName);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.hey();
// jessica.hey();  // jessica.hey is not a function

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode(even if not activated)

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
// Manually set prototype property
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);  // Explicitly calling init method, not using constructor
sarah.calcAge();

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // Inheritance
  // Person(firstName, birthYear); // Cannot set properties of undefined
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// mike.calcAge(); // not declared

// Student.prototype = Person.prototype;
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// extends automatically creates prototype chain
class StudentCl extends PersonCl {
  // You don't need to write constructor if course is not used(if parameters are same)
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10
      }`);
  }
};

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();

// 기존에는 Encapsulation 하기 힘들었으나, 새로운 개념이 나오면서 속성이나 메소드를 숨기기 쉬워 졌다.

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  // Public fields
  // No const, this. 뒤에 세미콜론(;)은 필수
  locale = navigator.language;
  bank = 'Bankist';

  // Private fields(Needs to Protect this field)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Input 안 받는 속성은 parameter에 정의 안하고 Default 값으로 속성 정의 가능
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Private Methods
  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // available only on class, not on objects (ex: Account.test() => o, acc1.test() => x)
  static test() {
    console.log('TEST');
  }

  // Static private method
  static #test() {
    console.log('TEST');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// acc1.movements = [];   // 이러면 큰일 남...

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movements); // Property '#movements' is not accessible outside class 'Account' because it has a private identifier.

Account.test();
// Account.#test();

// Chaining -> 각각 method가 해당 객체를 반환하면 가능
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  // .getMovements()
  .withdraw(4000)
  .getMovements();

console.log(movements);
