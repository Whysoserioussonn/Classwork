class Hamster {

    constructor(name) {
      this.owner = "";
      this.name = name;
      this.price = 15;
    }
  
    wheelRun() {
      console.log('squeak squeak')
    }
  
    eatFood() {
      console.log('nibble nibble')
    }
  
    getPrice() {
      return this.price
    }
  }
  
  
  class Person {
  
    constructor(name) {
      this.name = name;
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
  
    getName() {
      return this.name
    }
  
    getAge() {
      return this.age
    }
  
    getWeight() {
      return this.weight
    }
  
    greet() {
      console.log('Hello! My name is ' + this.name)
    }
  
    eat() {
      this.weight++
      this.mood++
    }
  
    exercise() {
      this.weight--
    }
  
    ageUp() {
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount += 10
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster)
      this.mood += 10
      this.bankAccount -= hamster.getPrice()
    }
  
  }
  
  // 1
  const timmy = new Person("Timmy");
  
  // 2
  timmy.ageUp()
  timmy.ageUp()
  timmy.ageUp()
  timmy.ageUp()
  timmy.ageUp()
  
  // 3
  timmy.eat()
  timmy.eat()
  timmy.eat()
  timmy.eat()
  timmy.eat()
  
  // 4
  timmy.exercise()
  timmy.exercise()
  timmy.exercise()
  timmy.exercise()
  timmy.exercise()
  
  // 5
  for (let i = 0; i < 9; i++) {
    timmy.ageUp()
  }
  
  // 6 
  const hamster1 = new Hamster('Gus')
  
  // 7 
  hamster1.owner = 'Timmy'
  
  // 8 
  timmy.buyHamster(hamster1)
  
  // 9
  for (let i = 0; i < 15; i++) {
    timmy.ageUp()
  }
  
  // 10 
  timmy.eat()
  timmy.eat()
  
  // 11 
  timmy.exercise()
  timmy.exercise()
  
  console.log(timmy)
  
  
  