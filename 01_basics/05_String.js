const name = "Satya"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Satyaps")

// console.log(gameName[0]);  //S
// console.log(gameName.__proto__);  //{}

// console.log(gameName.length);  8
// console.log(gameName.toUpperCase());  //SATYAPS
// console.log(gameName);  //Satyaps

// console.log(gameName.charAt(3));  //y
// console.log(gameName.indexOf('t'));  //2

// const newString = gameName.substring(0, 4)
// console.log(newString); //Saty
// const anotherString = gameName.slice(-7,4)
// console.log(anotherString); //Saty


const newStringOne = "     Satyaps  "
// console.log(newStringOne);  // (     Satyaps  )
// console.log(newStringOne.trim()); //(Satyaps)

const url = "https://satya.com/hitesh%20sahoo"

// console.log(url.replace('%20', '-')) //https://satya.com/hitesh-sahoo

// console.log(url.includes('saty')) //true

console.log(gameName.split('a'))    //[ 'S', 'ty', 'ps' ]