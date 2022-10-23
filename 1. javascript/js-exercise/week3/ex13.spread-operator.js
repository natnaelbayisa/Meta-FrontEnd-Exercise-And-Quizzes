const alphabet = ["a", "b", "c"];
function a(first, second, third) {
  console.log(1, first);
  console.log(2, second);
  console.log(3, third);
}

a(alphabet[0], alphabet[1], alphabet[2]); //list all one by one by rest operator

a(...alphabet); // list all by spread operator ...dots
