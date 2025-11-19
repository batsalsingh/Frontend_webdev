// Base class: User
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

// Derived class: Driver
class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

// Trip class
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== 'number' || this.distance < 0) {
      throw new Error('Invalid distance. Distance must be a non-negative number.');
    }
    const ratePerKm = 15; // ₹15 per km
    return this.distance * ratePerKm;
  }

  printTripDetails() {
    try {
      const fare = this.calculateFare();
      console.log(`Trip from ${this.fromLocation} to ${this.toLocation}`);
      console.log(`Distance: ${this.distance} km`);
      console.log(`Fare: ₹${fare}`);
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
    }
  }
}

// 🧪 Test Scenario
const driver = new Driver('Amit', 4.8, 'Hyundai i20');
const trip1 = new Trip('Delhi', 'Noida', 12);
const trip2 = new Trip('Agra', 'Mathura', -5); // Invalid distance

console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}, Rating: ${driver.rating}`);
trip1.printTripDetails();
trip2.printTripDetails();