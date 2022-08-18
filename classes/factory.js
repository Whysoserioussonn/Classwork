// Singleton (do some research on this)

class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}



class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }

  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
    return this
  }

  findCar(index) {
    return this.cars[index];
  }
}

// only need one instance (Singleton)
const tesla = new Factory('Tesla')
