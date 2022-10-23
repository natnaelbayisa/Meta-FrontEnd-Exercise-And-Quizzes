var colors = ["red", "yellow", "black"];
// color in colors -> display amt of colors
// color of colors -> display color names
for (var color of colors) {
  console.log(color);
}

const cars = {
  speed: 100,
  color: "white",
};

for (prop of Object.keys(cars)) {
  console.log(prop, ":", cars[prop]);
}

const car1 = {
  color: "red",
  speed: 400,
};

//keys = color and speed, values = red and 400
console.log(Object.values(car1)); // [ 'red', 400 ]

const car2 = {
  color: "blue",
  speed: 800,
};
console.log(Object.entries(car2)); // [ 'color', 'blue' ], [ 'speed', 800 ] ]

// loop over any object's own property keys and values.
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}
/////////////////////////
function testBracketsDynamicAccess() {
  var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

  var drone = {
    color: "blue",
    speed: 200,
  };
  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
