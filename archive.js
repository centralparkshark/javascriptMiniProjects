// unused functions that don't need to be in the working js file


function fizzBuzz(a, b) {
    for (let i = a; a <= b; a++) {
        if (a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (a % 3 == 0) {
            console.log("Fizz")
        }
        else if (a % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(a);
        }
    };
}

// let dayOfWeek = 'Monday';
// switch (dayOfWeek) {
// case 'Monday':
// console.log('It\'s Monday!');
// break;
// case 'Tuesday':
// console.log('It\'s Tuesday!');
// break;
// case 'Wednesday':
// console.log('It\'s Wednesday!');
// break;
// default:
// console.log('It\'s some other day!');
// }

// break 
// continue

// // let array1 = [1, 2, 3, 4];
// let array2 = [6, 7, 8];
// let array3 = [5, 5, 5, 9, 2];

// function firstEven(array) {
//     for (let i = 0; i < array.length + 1; i++) {
//         if (array[i] % 2 == 0) {
//             console.log(array[i])
//             break;
//         }
//     }
// }


//default parameters
function greet(name = 'friend', age = 0) {
    console.log(`Hello ${name}, you are ${age} years
    old!`);
}

//rest parameters
function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log(`The sum is ${result}`);
}
//sum(1,2, 3, 4)

function calc(a, b, sign) {
    switch (sign) {
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
    }
}

let a1 = [1, 1, 1];
let b1 = [2, 2, 2];
function sumArrays(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    for (let j = 0; j < b.length; j++) {
        sum += b[j]
    }
    console.log(sum)
}

s1 = 'hi this is a sentence'
s2 = 'longest word first'
s3 = 'long in the middle it goes'
function longWord(sentence) {
    const words = sentence.split(' ');
    let longest = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length)
            longest = words[i]
    }
    console.log(longest)
}

function reverseWord(word) {
    let newWord = ''
    for (i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    console.log(newWord)
}

// function countVowels(word) {
//     let count = 0;
//     for (i = 0; i < word.length; i++) {
//         if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(word[i])) {
//             count++
//         }
//     }
//     console.log(count)
// }

const countVowels = word => {
    let count = 0;
    for (i = 0; i < word.length; i++) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(word[i])) {
            count++
        }
    }
    return count;
}

// console.log(countVowels("aaaa"))

const multiplyByTwo = (num) => {
    return num * 2;
}

const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const greetings = (name) => {
    return "Hello, " + name + "!";
}

let arrayLiteral = [1, 2, 3];
let newArray = new Array(4, 5, 6);
let emptyArray = [];

emptyArray[0] = 7;
emptyArray[1] = 8;
emptyArray[2] = 9;

const grid = [arrayLiteral, newArray, emptyArray]
const middle = grid[1][1];

grid[0][0] = 420;

// add element
// push (end)
// unshift (beginning)

// remove element
// pop (end)
// shift (beginning)

// modify with splice
const fruits = ['apple', 'banana', 'orange', 'pear'];
fruits.splice(1, 1, 'mango', 'kiwi');
// (index to start at, num of element to remove, new element to add)
// output: ['apple', 'mango', 'kiwi', 'orange', 'pear']

// console.log(fruits.indexOf('apple')); // output: 0
// console.log(fruits.indexOf('grape')); // output: -1 (not found)
// console.log(fruits.includes('apple')); // output: true

// slice(), returns a new array copy (doesnt modify og)
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const newColors = colors.slice(1, 4);
// console.log(newColors) //  [ "green", "blue", "yellow" ]

// splice() to add.remove
const colors2 = ['red', 'green', 'blue', 'yellow', 'purple'];
const removedColors = colors2.splice(1, 2, 'orange', 'pink'); // ['green', 'blue']
// console.log(colors2); // ['red', 'orange', 'pink', 'yellow', 'purple']
// console.log(removedColors); // ['green', 'blue']

// concat(), merges 2 arrays
const primaryColors = ['red', 'green', 'blue'];
const secondaryColors = ['orange', 'purple', 'yellow'];
const allColors =
primaryColors.concat(secondaryColors);
// console.log(allColors); // ['red', 'green', 'blue', 'orange', 'purple', 'yellow']
// doesnt modify ogs

// converting arrays to strings
// join()
// adds all elements of array to a single string seperated by a comma (can be changed)
const fruits2 = ['apple', 'banana', 'cherry'];
const fruits2String = fruits2.join(', ');
// console.log(fruits2String); // Output: "apple, banana, cherry"

// split() 
// oppisite, specify character or substring (or auto convert into individual chars)

// iterating over arrays
// forEach()
// array.forEach(function(currentValue, index, array) {
    // code to execute for each element
// });
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    // console.log(number);
});

// map()
// creates new array with the answers
const doubleNumbers = numbers.map(function(number) {
    return number * 2;
});
// console.log(doubleNumbers) // [ 2, 4, 6, 8, 10 ]

// filter()
// returns new array with elements that pass certain condition

// reduce() --> returns one value?

const array6 = [1, 2, 3];
array6.push(4, 5)
//console.log(array6)
let x = array6[1];
//console.log(x)
for (let i = 0; i < array6.length; i++) {
    //console.log(array6[i])
}

const array7 = ['apple', 'banana', 'cherry'];
array7.push('orange');
array7.pop()
array7.unshift('pear')
array7.shift()
array7.splice(1, 1)
let array8 = array7.slice()

const array9 = [1, 2, 3, 4, 5];
array9.forEach(function(num) {
    //console.log(num)
})

const squares = array9.map(function(num) {
    return num ** 2
})


const evens = array9.filter(function(num) {
    return num % 2 === 0
})

// objects
// have properties and methods (use dot notation)
// ex: string.length
// also have prototypal inheritance (create new objects based on existing)

// built in objects
// math, date, string, array, object

// custom objects
// object literal 
const person1 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
    }
};
// constructors: function to create new objects 
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const person2 = new Person ('Vinn', 24, {street: '16 Greenwood', city: 'Pittsburgh', state:'PA'})

// console.log(person1.name); // John (dot notation)
// console.log(person1["age"]); // 30 (bracket notation)

// modifying properties
person1.name = "Mary";
person1.occupaton = "Software Engineer"


// methods
let person3 = {
    name: "John Doe",
    age: 35,
    occupation: "Web Developer",
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
};

// person3.greet();

// every object has a prototype (reference to another object)
// follows up the prototype chain until it finds the needed method

// Using the Object() constructor
var myPrototype = new Object();
myPrototype.myProperty = "Hello, World!";
myPrototype.myMethod = function() {
    console.log(this.myProperty);
};

// Using an object literal
var myLiteralPrototype = {
    myProperty: "Hello, World!",
    myMethod: function() {
        console.log(this.myProperty);
    }
};

// object with a prototype
var myObject = Object.create(myPrototype);

// override property by assigning new value
myObject.myProperty = "Goodbye, World!";

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        retur `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
};

class Ambulance extends Vehicle {
    constructor(make, model, year, hasSiren) {
        super(make, model, year);
        this.harSiren = hasSiren;
    }
    
    getInfo() {
        return `${super.getInfo()}, Has Siren: ${this.harSiren}`;
    }

    useSiren() {
        console.log('WEE-OOH WEE-OOH')
    }
}

const amb = new Ambulance('ford', 'ranger', 2007, 'true')
// console.log(amb.useSiren())
//console.log(amb.year)

class Bus extends Vehicle {
    constructor(make, model, year, numSeats) {
        super(make, model, year);
        this.numSeats = numSeats;
    }

    getInfo() {
        return `${super.getInfo()}, Number of Seats: ${this.numSeats}`;
    }

    driveToWork() {
        console.log(`Starting the engine of the ${this.make} ${this.model} and driving to work with ${this.numSeats} seats!`);
    }
}

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound)
    }
}

const bear = new Animal('Becky', 'hi rawr xD');
const tiger = new Animal('Tiger', 'ROAAAR');

// bear.makeSound()
// tiger.makeSound()

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    honk() {
        console.log("Honk Honk")
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    drive() {
        console.log('The car is now driving')
    }
}

class Truck extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    haul() {
        console.log('The truck is hauling a big load')
    }
}

const v1 = new Car('Nissan', 'Altima');
const v2 = new Truck('Ford', 'F150');

v1.honk();
v2.honk();
v1.drive();
v2.haul();


// SUM
function sum(a, b) {
    return a + b; 
}

let x2 = 1;
let y = 2;
let z = sum(x2, y)
// console.log(z)

// AVERAGE 
function avg(...rest) {
    let total = 0
    for (i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total / rest.length;
}
//console.log(avg(1, 2, 3, 4, 5))


// AVG2 
const list1 = [4, 10, 22, -30, 55]
const list2 = [68, 7, -22, 9, 100]

function average2(list1, list2) {
    let total1 = 0
    for (i = 0; i < list1.length; i++) {
        total1 += list1[i];
    }
    let avg1 = total1 / list1.length
    let total2 = 0
    for (i = 0; i < list2.length; i++) {
        total2 += list2[i];
    }
    let avg2 = total2 / list2.length
    let fullAvg = (avg1 + avg2) / 2
    console.log(`Average of List 1: ${avg1} \nAverage of List 2: ${avg2} \nAverage of both lists: ${fullAvg}`)
}
//average2(list1, list2)

// Extra Exercise
let box1 = 3;
let box2 = 4;
let temp = box1; 
box1 = box2;
box2 = temp;

// Section 7 (page 111) Error Handling

// try/catch/finally
try {
    // main code
} catch (error) {
    // code if error happens
} finally {
    // code executed no matter what
}

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        console.error(error);
        return null;
    } finally {
        console.log("Division operation complete.");
    }
}

function divideByZero(num1, num2) {
    if (num2 === 0) {
        throw "Cannot divide by zero!";
    } else {
        return num1 / num2;
    }
}

try {
    console.log(divideByZero(10, 0));
        } catch (error) {
    console.log("Error: " + error);
}

try {
    console.log("Executing try block");
    throw "An error occurred";
} catch (error) {
    console.log("An error occurred: " + error);
} finally {
    console.log("Executing finally block");
}

function posNeg(num) {
    if (num > 0) {
        return "Positive"
    } else if (num == 0) {
        return "It is zero"
    } else {
        return "Negative"
    }
}
// console.log(posNeg(-4)) // Negative
// console.log(posNeg(0)) // It is zero
// console.log(posNeg(4)) // Positive

function checkAge(age) {
    if (age >= 18) {
        return "Access Granted"
    } else {
        return "Access Denied"
    }
}
// console.log(checkAge(4)) // Access Denied
// console.log(checkAge(18)) // Access Granted
// console.log(checkAge(56)) // Access Granted

function countdown(x) {
    for (let i = x; i > 0; i--) {
        console.log(i)
    }
}
// countdown(10)

function odds(x) {
    for (let i = 1; i <= x ; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
//odds(10)

function evens(x) {
    for (let i = 1; i <= x ; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
// evens(10)

function threes(x) {
    for (let i = 6; i <= x ; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}
// threes(60)

function pyramid(x) {
    for (let i = 1; i <= x ; i++) {
        console.log("#".repeat(i))
    }
}
//pyramid(7)

function quarters(cost, paid) {
    let change = paid - cost;
    let quarters = 0;
    while (change > (quarters * .25)) {
        quarters++
    }
    return quarters;
}

// console.log(quarters (4, 10))

function countdown(n) {
    while (n >= 0) {
        console.log(n)
        n--;
    }
}

//countdown(4)

function mult3() {
    let n = 1;
    while (n < 35) {
        if (n % 3 == 0) {
            console.log(n)
        }
        n++;
    }
}

// mult3()

function mult5() {
    let n = 1;
    while (n < 100) {
        if (n % 5 == 0) {
            console.log(n)
        }
        n++;
    }
}

// mult5()

function multBy3() {
    let n = 0;
    while (n < 20) {
        if (n % 2 == 0) {
            console.log(n * 3)
        }
        n++;
    }
}

//multBy3()

function divBy4() {
    let n = 500;
    while (n < 800) {
        if (n % 4 == 0) {
            console.log(n)
        }
        n++;
    }
}

//divBy4()

function primeTime(n) {
    // prime is a true/false value to be checked 
    let prime;
    // set n to next value after n to see if it is prime
    n++;

    // continues until prime is true
    while (prime != true) {
        // checks if prime
        //temporarily sets prime to true
        prime = true;
        for (let i = n - 1; i > 1; i--) {
            if (n % i == 0) {
                // if even 1 number is divisible, prime is false
                prime = false;
            } 
        }
        if (prime == false) {
            // if prime is still false, increases n by one
            n++;
        } else {
            // if it makes it to here and prime is still true, new n is prime
            console.log(`${n} is the next prime number.`)
            prime = true;
        }
    }
}

// primeTime(8);


let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
function feelingLoopy(file) {
rows = file.split("\n")

for (let i = 0; i < rows.length; i++) {
    rows[i] = rows[i].split(",")
}

console.log(rows)
}

// feelingLoopy(csv)

function computeArea(width, height) {
    let area = height * width
    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`)
}

// computeArea(3, 5)

const planetHasWater = function(planet) {
    planet = planet.toLowerCase()
    if (planet == "earth" || planet == "mars") {
        return true;
    } else {
        return false;
    }
}

// planetHasWater("Mars") // true
// planetHasWater("Mercury") // false

function setColor(bicycle, color = 'purple') {
	bicycle.color = color;
}

var a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    let total = 0; 
    for (let i = 0; i <= 9; i++) {
        if (isbn[i] = "X") {
            total += ((i + 1) * 10)
        } else {
            total += ((i + 1) * isbn[i])
        }
        
    } 
    // (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10)
    console.log(total)
    if (total % 11 == 0 && isbn.length == 10) {
        return true;
    } else {
        return false;
    }
}

array = [[1,2,3,1],
         [4,5,6,4],
         [7,8,9,7],
         [7,8,9,7]]

function snail(array) {
    let a = [];
    let widthMax = array.length - 1;
    let heightMax = array[0].length - 1;
    let widthMin = 0;
    let heightMin = 0
    // for each row from min to max 
    for (let row = heightMin; row <= heightMax; row++) {
        // for each column from min to max (goes right)
        for (let col = widthMin; col <= widthMax; col++) {
            a.push(array[row][col])
        }
        heightMin++;
        // each row from top to bottom (goes down)
        for (let row = heightMin; row <= heightMax; row++) {         
            a.push(array[row][widthMax])
        }
        //goes left
        widthMax--;
        for (let col = widthMax; col >= widthMin; col--) {
            a.push(array[heightMax][col])
        }
        //goes up
        heightMax--;
        for (let row = heightMax; row >= heightMin; row--) {         
            a.push(array[row][widthMin])
        }
        widthMin++;
    }
    return(a)
}

 // snail(array)