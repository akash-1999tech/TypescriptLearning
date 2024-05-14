//Annotations
let myName: string = "HuXn WebDev";
// myName = "another name";
// myName = 7; we cant assign a boolean or number to string type
console.log(myName);

let favNumber: number = 7;
// favNumber += 7;
// favNumber = "huxn"; we cant assign a boolean or string to number type
console.log(favNumber);

let tsBool: boolean = false;
// tsBool = true;
// tsBool = 7; we cant assign a number or string to boolean type
console.log(tsBool);

// Type Inference
let ourName = "ojooo";
// ourName = 7; --> error, compiler automatically decides ourName is string
console.log(ourName);
// console.log(typeof ourName);

//Any Type
let favNumberTwo: any = 12;
favNumberTwo = "true";
console.log(favNumberTwo);
// console.log(typeof favNumberTwo);

//Function parameter annotations
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

//arrow function
const dobleNum = (x: number, y: number) => {
  return x * y;
};

const res = dobleNum(2, 10);
console.log(res);

// default param values
function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res1 = greet("HuXn");
console.log(res1);

//Function return annotations
const doble2 = (x: number): number => x * x;

const res3 = doble2(10);
console.log(res3);

//Void
function printMessage(message: string): void {
  console.log(`This is my ${message}`);
}

printMessage("messages");

//Never
//1--> function that always throws an error

// function throwError(msg: string): never {
//     throw new Error(msg)
// }

//2--> funcion that has inifinte loop

// function infiniteLoop(): never {
//     while(true){}
// }

//3--> function that can never have a value

// let x:never;

// function neverReturns(): never {
//     while(true) {}
// }

// x=neverReturns();

//Array Types
const numbers: number[] = [1, 2, 3, 4];
console.log(numbers);

//or

const names: Array<string> = ["alice", "bob", "charlie"];
names.push("ijuhb");
console.log(names);

//multidimensional array

const multiDim: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(multiDim);

const triDim: number[][][] = [[[1], [2], [3]]];
console.log(triDim);

//object annotation

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 3,
};

console.log(person.age);

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "huxn",
    age: 20,
    location: "china",
  };
}

const res4 = printUser();
console.log(res4.location);

// Type Aliases
type Person = {
  name: string;
  age: number;
  location: string;
};

function printPerson(person: Person) {
  console.log(person);
}

const myPerson: Person = { name: "alice", age: 23, location: "india" };
printPerson(myPerson);

//Optional properties

type User = {
  name: string;
  age?: number;
  email?: string;
  readonly location?: string;
};

function printUser1(person: User) {
  console.log(person);
}

const myUser1: User = { name: "alice", age: 23 };
const myUser2: User = { name: "alice", email: "uhygtf@gmail.com" };
const myUser3: User = { name: "alice", location: "oiuh" };
// myUser3.location = 'ijuhgv'; Cannot assign to 'location' because it is a read-only property.
printUser1(myUser1);
printUser1(myUser2);
printUser1(myUser3);

//Intersection Types
type userInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email?: string;
  readonly password: string;
};

type User1 = userInfo & AccountDetails;

const Alice: User1 = {
  first: "HuXn",
  last: "web dev",
  email: "iuhg@gmail.com",
  password: "oiuh123",
  age: 20,
};

console.log(Alice);

// Unions
let password: string | number = 20;
type userInfo1 = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails1 = {
  email: string;
  password: string;
};

let User2: userInfo1 | AccountDetails1 = {
  first: "HuXn",
  last: "web dev",
  age: 20,
  email: "ijg",
};

console.log(User2);

const items: (number | string | boolean)[] = [1, 5, 5, "hello", true];
console.log(items);

//Literal Types

let color: "red" | "crimson" | "fusha";

color = "red";
// color = 'blue'; ---> Type '"blue"' is not assignable to type '"red" | "crimson" | "fusha"'.
console.log(color);

let isTrue: true | false;

isTrue = true;
// isTrue = 1234 ---> Type 'number' is not assignable to type 'boolean'

let passwordTxt: "secretPassword" = "secretPassword";
// passwordTxt="somethingElse" ---> Type '"somethingElse"' is not assignable to type '"secretPassword"'
console.log(passwordTxt);

//Tuples

let myTuple: [number, string];
myTuple = [10, "oiuygf"];
// myTuple=[10,'oiuygf',987];  ---> Type '[number, string, number]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2.
// myTuple=['ijuhg', 10]; ---> we cant change the order of type declaration
console.log(myTuple);

//Enums
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
}

console.log(WeatherConditions.Rainy);

// oop
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person1("Jhon", 20);
console.log(person2);

//access modifier
class Human {
  private first: string;
  public last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} Age: ${this.age}`;
  }
}

class HumanBeing extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}

const HuXn = new HumanBeing("oiuh", "iuhg", 20);
console.log(HuXn);

//getter and setter

class MyClass {
  private myProperty: number = 0;

  get MyProperty(): number {
    return this.myProperty;
  }

  set MyProperty(value: number) {
    if (value < 0) {
      throw new Error("this value can't be changed");
    } else {
      this.myProperty = value;
    }
  }
}

const myInstance = new MyClass();
console.log((myInstance.MyProperty = 10));

// Interface
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "ih",
  ram: 8,
  hdd: 1000,
};

console.log("name: ", computerExample.name);
console.log("ram: ", computerExample.ram);
console.log("hdd: ", computerExample.hdd);

//Interface with Functions
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(10, 20));

// extending from parent interface
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "star wars",
  genra: "action",
  ratings: 8.9,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

const newMov = movie1.printMovieInfo("jhon wick", 100, 9.0);
console.log(newMov);


//Interfaces with class component
interface Vechile {
  start(): void;
  stop(): void;
}

class Car implements Vechile {
  start(): void {
    console.log("started");
  }

  stop(): void {
    console.log("stopped");
  }
}

const myCar = new Car();
myCar.stop();


//Declaration Merging

//original interface
interface myCar {
  brand: string;
  start(): void;
}

//Declaration merging (interface extension)
interface myCar {
  model: string;
  stop(): void;
}

const CarDetails: myCar = {
  brand: "BMW",
  model: "M3",
  start(): void {
    console.log("start");
  },
  stop(): void {
    console.log("stop");
  },
};

CarDetails.start();
CarDetails.stop();
