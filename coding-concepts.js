// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer:
// This will return the string with each letter separated by quotation marks.

// b) Verify and explain:
// The split accessor method converted the string into an array and described where the string split while leaving the original string unchanged.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// This will log "undefined" or an error message

// b) Verify and explain:
// Console logging "LEARN Student" would not return anything because it is not defined in the function.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:
// This will multiply each number in the array by 2.

// b) Verify and explain:
// The .map method creates a new array by calling on each number from the original array and multiplying each one by two

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// This will return an array with only the odd numbers

// b) Verify and explain:
// The .filter method filters the array down to the odd numbers

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// This will return the 0 index of languages 

// b) Verify and explain:
// Returned only Javascript which is in the 0 index of languages

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// This will not return anything because "George" has not been defined as a variable

// b) Verify and explain:
// Javascript read the function (no errors) but did not return anything