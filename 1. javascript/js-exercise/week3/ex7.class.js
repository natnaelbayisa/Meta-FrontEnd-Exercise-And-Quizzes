class Animal {
  constructor(lg) {
    this.legs = lg;
  }
}

class Dog extends Animal {
  constructor() {
    super(4);
  }
}

var result = new Dog();
console.log(result.legs);
