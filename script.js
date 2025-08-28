// Complete the js code
function Car(make, model) {
	 if (typeof make == "string" || typeof model == "string") {
    console.log("Eroor");
  }
  this.make = make;
  this.model = model;
}
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportCar(make, model, topSpeed) {
	  this.make = make;
  this.model = model;
  this.topSpeed = topSpeed;
}

SportCar.prototype = Object.create(Car.prototype);

SportCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

const car = new SportCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
