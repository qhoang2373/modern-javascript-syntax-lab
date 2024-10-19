// <------ Exercuse 1 ----->

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const nums2 = nums.map((currentElement) => {
    return currentElement * 2;
});

console.log(nums2);

// <------ Exercuse 2 ----->

// Given the following array, use destructuring to pull out the first and second values and place them into variables. 
// Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);


// <------ Exercuse 3 ----->

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
const { make, model } = car;

console.log(car.make);
console.log(car.model);

// <------ Exercise 4 ----->

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppers = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppers];

console.log(controversialPizzaToppings);


// <------ Exercise 5 ----->

  // Duplicate the following object and spread its values into a new variable `myCar`.

const vehicle = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.

  // Copy the properties of Vehicle:
const newVehicle = {...vehicle};

// Update the properties of newVehicle:
newVehicle.model = 'q7';

console.log(vehicle)
console.log(newVehicle)
  
// <------ Exercise 6 ----->

// Create an object named userProfile. 
const userProfile = {};

// Define a variable named propertyName and assign a string to it (like a username, age, or email). 

const propertyName = 'age';
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

userProfile[propertyName] = 20;

console.log(userProfile);

// <------ Exercise 8 ----->

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function feline(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`)
}
feline()

// <------ Exercise 9 ----->

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

let pizza = 'tasty' 
let isTasty = pizza === 'tasty' ? 'yum' : 'yuck'

console.log(pizza)

