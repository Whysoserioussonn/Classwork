const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
    console.log( random(100, 200) );
}

const circle = require('./utilities/circle');
  console.log( circle.area(50) );  // 7853.98...
  console.log( circle.circumference(75) );  // 471.23...