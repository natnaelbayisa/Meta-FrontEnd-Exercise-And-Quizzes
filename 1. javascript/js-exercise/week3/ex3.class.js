// class Bird {
//   useWings() {
//     console.log("Flying!");
//   }
// }

// class Eagle extends Bird {
//   useWings() {
//     super.useWings();
//     console.log("Barely flapping!");
//   }
// }

// class Penguin extends Bird {
//   useWings() {
//     console.log("Diving!");
//   }
// }

// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

var bird = {
  canFly: true,
  hasWings: true,
  hasFeathers: true,
};

var eagle = Object.create(bird);
console.log("Eagle has wigs", eagle.hasWings);
console.log("Eagle can fly", eagle.canFly);
console.log("Eagle has feathers", eagle.hasWings);
