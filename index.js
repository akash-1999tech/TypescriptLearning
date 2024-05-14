var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Annotations
var myName = "HuXn WebDev";
// myName = "another name";
// myName = 7; we cant assign a boolean or number to string type
console.log(myName);
var favNumber = 7;
// favNumber += 7;
// favNumber = "huxn"; we cant assign a boolean or string to number type
console.log(favNumber);
var tsBool = false;
// tsBool = true;
// tsBool = 7; we cant assign a number or string to boolean type
console.log(tsBool);
// Type Inference
var ourName = "ojooo";
// ourName = 7; --> error, compiler automatically decides ourName is string
console.log(ourName);
// console.log(typeof ourName);
//Any Type
var favNumberTwo = 12;
favNumberTwo = "true";
console.log(favNumberTwo);
// console.log(typeof favNumberTwo);
//Function parameter annotations
function addOne(num) {
    return num + 1;
}
var result = addOne(3);
console.log(result);
//arrow function
var dobleNum = function (x, y) {
    return x * y;
};
var res = dobleNum(2, 10);
console.log(res);
// default param values
function greet(person) {
    if (person === void 0) { person = "Anonymous"; }
    return "Hello ".concat(person);
}
var res1 = greet("HuXn");
console.log(res1);
//Function return annotations
var doble2 = function (x) { return x * x; };
var res3 = doble2(10);
console.log(res3);
//Void
function printMessage(message) {
    console.log("This is my ".concat(message));
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
var numbers = [1, 2, 3, 4];
console.log(numbers);
//or
var names = ["alice", "bob", "charlie"];
names.push("ijuhb");
console.log(names);
//multidimensional array
var multiDim = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
];
console.log(multiDim);
var triDim = [[[1], [2], [3]]];
console.log(triDim);
//object annotation
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 3,
};
console.log(person.age);
function printUser() {
    return {
        name: "huxn",
        age: 20,
        location: "china",
    };
}
var res4 = printUser();
console.log(res4.location);
function printPerson(person) {
    console.log(person);
}
var myPerson = { name: "alice", age: 23, location: "india" };
printPerson(myPerson);
function printUser1(person) {
    console.log(person);
}
var myUser1 = { name: "alice", age: 23 };
var myUser2 = { name: "alice", email: "uhygtf@gmail.com" };
var myUser3 = { name: "alice", location: "oiuh" };
// myUser3.location = 'ijuhgv'; Cannot assign to 'location' because it is a read-only property.
printUser1(myUser1);
printUser1(myUser2);
printUser1(myUser3);
var Alice = {
    first: "HuXn",
    last: "web dev",
    email: "iuhg@gmail.com",
    password: "oiuh123",
    age: 20,
};
console.log(Alice);
// Unions
var password = 20;
var User2 = {
    first: "HuXn",
    last: "web dev",
    age: 20,
    email: "ijg",
};
console.log(User2);
var items = [1, 5, 5, "hello", true];
console.log(items);
//Literal Types
var color;
color = "red";
// color = 'blue'; ---> Type '"blue"' is not assignable to type '"red" | "crimson" | "fusha"'.
console.log(color);
var isTrue;
isTrue = true;
// isTrue = 1234 ---> Type 'number' is not assignable to type 'boolean'
var passwordTxt = "secretPassword";
// passwordTxt="somethingElse" ---> Type '"somethingElse"' is not assignable to type '"secretPassword"'
console.log(passwordTxt);
//Tuples
var myTuple;
myTuple = [10, "oiuygf"];
// myTuple=[10,'oiuygf',987];  ---> Type '[number, string, number]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2.
// myTuple=['ijuhg', 10]; ---> we cant change the order of type declaration
console.log(myTuple);
//Enums
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Rainy);
// oop
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var person2 = new Person1("Jhon", 20);
console.log(person2);
//access modifier
var Human = /** @class */ (function () {
    function Human(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    Human.prototype.getName = function () {
        return "".concat(this.first, " ").concat(this.last, " Age: ").concat(this.age);
    };
    return Human;
}());
var HumanBeing = /** @class */ (function (_super) {
    __extends(HumanBeing, _super);
    function HumanBeing(first, last, age) {
        return _super.call(this, first, last, age) || this;
    }
    return HumanBeing;
}(Human));
var HuXn = new HumanBeing("oiuh", "iuhg", 20);
console.log(HuXn);
//getter and setter
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "MyProperty", {
        get: function () {
            return this.myProperty;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("this value can't be changed");
            }
            else {
                this.myProperty = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var myInstance = new MyClass();
console.log((myInstance.MyProperty = 10));
var computerExample = {
    name: "ih",
    ram: 8,
    hdd: 1000,
};
console.log("name: ", computerExample.name);
console.log("ram: ", computerExample.ram);
console.log("hdd: ", computerExample.hdd);
var add = function (a, b) { return a + b; };
console.log(add(10, 20));
var movie1 = {
    name: "star wars",
    genra: "action",
    ratings: 8.9,
    printMovieInfo: function (name, price, ratings) {
        return "Movie name: ".concat(name, " Price: ").concat(price, " Ratings: ").concat(ratings);
    },
};
var newMov = movie1.printMovieInfo("jhon wick", 100, 9.0);
console.log(newMov);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("started");
    };
    Car.prototype.stop = function () {
        console.log("stopped");
    };
    return Car;
}());
var myCar = new Car();
myCar.stop();
var CarDetails = {
    brand: "BMW",
    model: "M3",
    start: function () {
        console.log("start");
    },
    stop: function () {
        console.log("stop");
    },
};
CarDetails.start();
CarDetails.stop();
//normal function vs Generic Function
//normal
function printNumber(item, defaultValue) {
    return [item, defaultValue];
}
function printString(item, defaultValue) {
    return [item, defaultValue];
}
function printBoolean(item, defaultValue) {
    return [item, defaultValue];
}
var num = printNumber(1, 2);
var str = printString("1", "2");
var bool = printBoolean(true, false);
console.log(num);
console.log(str);
console.log(bool);
//Generic
function printInfo(item, defaultValue) {
    return [item, defaultValue];
}
var nums = printInfo(12, 20);
var strs = printInfo("world", "hello");
var bools = printInfo(true, false);
console.log(nums);
console.log(strs);
console.log(bools);
//we can also use without mentinoning type parameter
var nums1 = printInfo(20, 12);
var strs1 = printInfo("hello", "world");
var bools1 = printInfo(false, true);
console.log(nums1);
console.log(strs1);
console.log(bools1);
var BuddyDog = printInfo({ name: "Buddy", breed: "lab" }, { name: "default", breed: "unknown" });
console.log(BuddyDog);
// get a randon key value pairs using generics
function getRandomKeyValuePairs(obj) {
    var keys = Object.keys(obj);
    var randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
var stringObject = {
    a: "apple",
    b: "banana",
    c: "cherry",
};
var randomStringPair = getRandomKeyValuePairs(stringObject);
console.log(randomStringPair);
// filter array based on condition using generics
function filterArray(array, condition) {
    return array.filter(function (item) { return condition(item); });
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numberArray, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
