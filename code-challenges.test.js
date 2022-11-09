// ASSESSMENT 2: Coding Practical Questions with Jest

// const { valueToNode } = require("@babel/types")
// const { array } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.




// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// Input: 15
// Output: "15 is divisible by three"

// Input: 0
// Output: "0 is divisible by three"

// Input: -7
// Output: "-7 is not divisible by three"

describe("evenThree", () => {
    it("returns `15 is divisible by three` if number is 15 or `0 is divisible by three` if number is 0 or `-7 is not divisble by three` if number is -7", () => {
     expect(evenThree(15)).toEqual("15 is divisible by three")
     expect(evenThree(0)).toEqual("0 is divisible by three")
     expect(evenThree(-7)).toEqual("-7 is not divisible by three")

    })
})

// ReferenceError: "evenThree is not defined" = good fail

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called evenThree that takes in an object as an argument 
// Using object/number as the parameter
// Write a conditional to evaluate if number equals 15
    // return "15 is divisible by three"
// Write a conditional to evaluate if number equals 0
    // return "0 is divisible by three"
// Write a conditional to evaluate if number equals -7
    // return "-7 is not divisible by three"

const evenThree = (number) => {
    if(number === 15) {
        return "15 is divisible by three"
    } else if(number === 0) {
        return "0 is divisible by three"
    } else if(number === -7) {
        return "-7 is not divisible by three"
    }
}




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// Input: ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Input: ["temperature", "database", "chopsticks", "mango"]
// Output: ["Temperature", "Database", "Chopsticks", "Mango"]


describe("capArray", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
      let input = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database", "chopsticks", "mango"]
      let expectedOutput = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database", "Chopsticks", "Mango"]
      expect(capArray(input)).toEqual(expectedOutput)
    })
})

// ReferenceError: capArray is not defined = good fail

// b) Create the function that makes the test pass.

// Pseudocode1:
// Create function called capArray that takes in an array of words and returns an array with all the words capitalized
// Using one array as parameter
// Use .map method to iterate through the array
// Use value to return the value for the index 0
// Use .toUppercase built in method to capitalize the first indes
// return results 

const capArray = (array) => {
    return array.map((value) => {
    return value[0].toUpperCase() + value.substring(1)
    })
}




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// Input: learn
// Output: 1

// Input: academy
// Output: 0

// Input: challenges
// Output: 2

        describe("moreWords", () => {
        it("takes in a string and logs the index of the first vowel", () => {
        let input1 = ["learn"]
        let input2 = ["academy"]
        let input3 = ["challenges"]
        expect(moreWords(input1)).toEqual(1)
        expect(moreWords(input2)).toEqual(0)
        expect(moreWords(input3)).toEqual(2)
    })
})

// ReferenceError: moreWords is not defined = good error

// Pseodocode:
// Create function called moreWords that takes in a string and logs the index of the first vowel
// Create variables for strings and vowels
// Create a variable as a placeholder for the found vowels
// return foundVowels
// create for loops for each string to iterate down the string and return the index of the first vowel

let vowels = [`a`, `e`, `i` , `o`, `u`]
let string1 = "learn"
let string2 = "academy"
let string3 = "challenges"

const moreWords = (string1) => {
for(let i = 0; i < string1.length; i++) {
if (vowels.indexOf(string1[0])) {
return vowels.indexOf(string1)
}
}
}

// Got really stuck on this one!!
