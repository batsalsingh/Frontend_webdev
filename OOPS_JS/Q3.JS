// Product constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method to apply discount
Product.prototype.applyDiscount = function(percent) {
  const discountAmount = (this.price * percent) / 100;
  const newPrice = this.price - discountAmount;
  return newPrice;
};

// 🧪 Create 3 products
const product1 = new Product('Laptop', 60000);
const product2 = new Product('Smartphone', 30000);
const product3 = new Product('Headphones', 3000);

// 💸 Apply discounts
console.log(`${product1.name} after 10% discount: ₹${product1.applyDiscount(10)}`);
console.log(`${product2.name} after 15% discount: ₹${product2.applyDiscount(15)}`);
console.log(`${product3.name} after 20% discount: ₹${product3.applyDiscount(20)}`);