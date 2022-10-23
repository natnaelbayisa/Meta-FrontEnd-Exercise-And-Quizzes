// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (cow of dairy) {
    console.log(cow);
  }
}
logDairy();

// Task 2
const animal = {
  canJump: true,
};
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (value of Object.keys(bird)) {
    console.log(value, ":", " ", bird[value]);
  }
}
birdCan();

// Task 3
function animalCan() {
  for (props in bird) {
    console.log(props, ":", " ", bird[props]);
  }
}
animalCan();
