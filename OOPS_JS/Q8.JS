// Base class: MovieTicket
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

// Add printTicket to MovieTicket prototype
MovieTicket.prototype.printTicket = function() {
  console.log('--- Ticket ---');
  console.log(`Movie: ${this.movieName}`);
  console.log(`Seat: ${this.seatNo}`);
  console.log(`Price: ₹${this.price.toFixed(2)}`);
  console.log('--------------');
};

// Derived class: OnlineTicket extends MovieTicket
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee = 0) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Demonstration
const t1 = new MovieTicket('Dhoom 4', 'B12', 250);
const ot1 = new OnlineTicket('Dhoom 4', 'A10', 250, 30);
const ot2 = new OnlineTicket('Interstellar', 'C5', 300, 45);

// Call prototype method defined on MovieTicket using OnlineTicket objects
console.log('Using printTicket on MovieTicket instance:');
t1.printTicket();

console.log('\nUsing printTicket on OnlineTicket instances (prototype chain):');
ot1.printTicket(); // inherited via prototype
console.log(`Total (including convenience fee): ₹${ot1.getTotalAmount().toFixed(2)}\n`);

ot2.printTicket(); // inherited via prototype
console.log(`Total (including convenience fee): ₹${ot2.getTotalAmount().toFixed(2)}\n`);

// Show prototype chain and instanceof relationships
console.log('Prototype checks:');
console.log('ot1 instanceof OnlineTicket ->', ot1 instanceof OnlineTicket);
console.log('ot1 instanceof MovieTicket ->', ot1 instanceof MovieTicket);
console.log('MovieTicket.prototype.isPrototypeOf(ot1) ->', MovieTicket.prototype.isPrototypeOf(ot1));