// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myFirstClosure = 'This is my fist closure';
function returnMyFirstClosure () {
  return myFirstClosure;
}
console.log(returnMyFirstClosure());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count  = 0;
  return function(){
    count = count +1;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter =counter();
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count =0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: () => (count = count +1),
    decrement: () => (count = count -1)
  }
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
