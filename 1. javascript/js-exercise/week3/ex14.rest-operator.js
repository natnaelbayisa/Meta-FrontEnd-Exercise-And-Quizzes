const alphabet = ["b", "c", "d", "e", "f", "a", "e", "i", "o", "u"];

const [] = alphabet; //destructuring the array
const [first, second, third, fourth, fivth, ...vowels] = alphabet;
console.log(...vowels);

//
function addTaxPrices(taxRate, ...itemBought) {
  return itemBought.map((item) => taxRate * item);
}
let shoppingCart = addTaxPrices(1.1, 46, 89, 35, 79); // 1.1 is taxRate others are itembouught properties
console.log(shoppingCart);
