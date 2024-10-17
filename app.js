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
const duplicateToppings = [...pizzaToppers];

console.log(pizzaToppers);


// <------ Exercise 5 ----->

  