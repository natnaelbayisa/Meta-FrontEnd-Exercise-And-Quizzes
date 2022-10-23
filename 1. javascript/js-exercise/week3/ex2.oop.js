var purchase = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    // var calculation = purchase.shoes * purchase.stateTax;
    var calculation = this.shoes * this.stateTax;
    // console.log("Total Price is:", calculation); use return to remove undefined when output a value
    return "Total Price is: " + calculation;
  },
};
console.log(purchase.totalPrice());
