let price = 5;
let quantity = 2;
let total = 0;
let target = null;
let storage = [];

function record() {
  storage.push(target);
}

function replay() {
  storage.forEach(run => run());
}

target = () => {
  total = price * quantity;
};
//in ES6 notation
//target = () => { total = price * quantity }

console.log("before record + target: total=", total);
console.log("storage:", storage);
record();
console.log("after record, total=", total);
console.log("storage:", storage);
target();
console.log("after target, total=", total);
console.log("storage:", storage);

price = 20;
console.log(total); // => 10
replay();
console.log(total); // => 40
price = 3;
replay();
console.log(total);
