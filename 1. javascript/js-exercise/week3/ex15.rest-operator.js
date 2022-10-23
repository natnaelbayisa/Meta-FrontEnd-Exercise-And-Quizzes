// Join arrays, objects using the rest operator
const fruits = ["apple", "mango", "banana"];
const berries = ["blueberrys", "strawberry"];

const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

//
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);

//
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);

//
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);

//
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits];
fruits1.pop();
console.log(fruits1, "not", fruits2);

//
const meal = ["soup", "steak", "ice cream"];
let [starter] = meal;
console.log(starter);

//
let obj = {
  key: 1,
  value: 4,
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

//

function count(...basket) {
  console.log(basket.length);
}

count(10, 9, 8, 7, 6);
