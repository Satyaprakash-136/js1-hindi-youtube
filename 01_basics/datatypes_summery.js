// Primitive  datatypes //
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);

const bigNumber = 324354334365365645767n



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["Shaktimaan", "nagraj", "doga"]

let myObj = {
    name: "Satya",
    age: 23
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj);
