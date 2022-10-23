//forEach()
const phones = ["Apple", "Samsung", "Oppo", "OnePlus", "Nokia"];
function appendIndex(phones, index) {
  console.log(`${index}.${phones} `);
}

phones.forEach(appendIndex);

//
const pc = ["Dell", "Hp", "Mac", "Toshiba"];
pc.forEach(function (pc, index) {
  console.log(`${index}.${pc} `);
});

// filter()
const num = [10, 15, 20, 25, 30];
num.filter(function (num) {
  console.log(num > 20);
});

//  map()
const m = [0, 10, 20, 30, 40, 50, 55];
m.map(function (m) {
  console.log(m / 10);
});

////
const result = [];
const drone = {
  color: "blue",
  speed: 5000,
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

//
let bestBoxers = new Map();
bestBoxers.set(1, "The champion");
bestBoxers.set(2, "The runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1));

//set()
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
