// Q4 - Constructor & Prototype Method

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype (shared by all Car objects)
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Creating objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Maruti", "Swift");

// Calling shared method
car1.getDetails();
car2.getDetails();
