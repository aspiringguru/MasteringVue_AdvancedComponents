class Dep {
  // Stands for dependency
  constructor() {
    this.subscribers = []; // The targets that are dependent, and should be
    // run when notify() is called.
  }
  depend() {
    // This replaces our record function
    if (target && !this.subscribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subscribers.push(target);
    }
  }
  notify() {
    // Replaces our replay function
    this.subscribers.forEach(sub => sub()); // Run our targets, or observers.
  }
}

const dep = new Dep();
console.log("dep:", dep);
console.log("dep.subscribers:", dep.subscribers);

let price = 5;
let quantity = 2;
let total = 0;
let target = () => {
  total = price * quantity;
};
console.log("target:", target);
dep.depend(); // Add this target to our subscribers
console.log("dep:", dep);

target(); // Run it to get the total

console.log(total); // => 10 .. The right number
price = 20;
console.log(total); // => 10 .. No longer the right number
dep.notify(); // Run the subscribers
console.log(total); // => 40  .. Now the right number
