// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (d of dishData) {
    var finalPrice;
    if (taxBoolean == true) {
      finalPrice = d.price * tax;
    } else if (taxBoolean == false) {
      finalPrice = d.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log("Dish:", d.name, "Price: $" + finalPrice);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  var condition = typeof guests == "number" && guests > 0 && guests < 30;
  if (condition == true) {
    var discount = 0;
    if (guests < 5) {
      var discount = 5;
    } else if (guests >= 5) {
      var discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()

getDiscount(true, 2);
