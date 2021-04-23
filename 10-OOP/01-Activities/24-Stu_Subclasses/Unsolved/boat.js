// TODO: Import the parent class
const Vehicle = require("./vehicle");
// TODO: Create a `Boat` class that extends the `Vehicle` class
 class Boat extends Vehicle {
   constructor(type, crew){
    this.type = type;
    this.crew = crew;
    
    super(id, this.numberOfWheels, sound)
      this.id = id;
      this.numberOfWheels = 0;
      this.sound = "Bwom";
   }

    useHorn(){
      console.log(`The boat goes ${this.sound}`);
    };

    crewSoundOff(){
      for(i=0; i < this.crew.length; i++){
        console.log(`${this.crew[i]} reporting for duty!`);
      }
    } 
 }
const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
