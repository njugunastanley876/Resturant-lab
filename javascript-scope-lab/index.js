// Task 2: Design and Develop the Code

// Step 1: Variable Data
// 1. Declare a variable in global scope called 'burgers', and assign it the value of an array containing 'Hamburger' and 'Cheeseburger'.
const burgers = ['Hamburger', 'Cheeseburger'];

// 2. Declare a variable in global scope called 'featuredDrink', and assign it the value 'Strawberry Milkshake'.
let featuredDrink = 'Strawberry Milkshake';


// Step 2: Function and Block
// Write a function named 'addBurger' that creates a function-scoped variable 'newBurger' 
// and adds it to the burgers array using .push() in exact order.
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}


// Step 3: Variable Declaration and Scope
// 1. Write an if statement whose condition is true so that the code in its block always executes.
if (true) {
  // Create a block-scoped variable named 'anotherNewBurger' and assign it 'Maple Bacon Burger'.
  const anotherNewBurger = 'Maple Bacon Burger';
  // Use the .push() array method to add 'anotherNewBurger' to the burgers array.
  burgers.push(anotherNewBurger);
}

// 2. Write a function named 'changeFeaturedDrink' that changes the value of 'featuredDrink' to 'The JavaShake'.
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}