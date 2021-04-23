// TODO: Import the parent class
const Vehicle = require("./vehicle");
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(color, passengers){
    this.color = color;
    this.passengers = passengers;


    super(id, numberOfWheels, sound)
      this.id = id;
      this.numberOfWheels = 4;
      this.sound = "beep";

  }
  
  useHorn() {
    console.log(`The car goes ${this.sound}`);
  }
  checkPassengers(){
    if(passengers < 4){
      console.log(4 - this.passengers.length);
    }else{
      console.log("This car only seats 4 people. You have too many passengers!" )
    }
  }
}


const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
