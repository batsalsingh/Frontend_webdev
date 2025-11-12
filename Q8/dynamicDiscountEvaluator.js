const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// apply category-wise discounts
let discountedCart = cart.map(product => {
  let discount = 0;

  if (product.category === "electronics") {
    discount = 0.10; // 10%
  } else if (product.category === "fashion") {
    discount = 0.05; // 5%
  }

  let finalPrice = product.price - (product.price * discount);
  return { ...product, finalPrice };
});

// calculate total cart value after individual discounts
let total = discountedCart.reduce((sum, p) => sum + p.finalPrice, 0);

// check for extra discount on high-value cart
if (total > 50000) {
  total = total - (total * 0.05); // extra 5%
}

// display results
console.log("Cart Summary with Discounts:");
discountedCart.forEach(p => {
  console.log(`${p.item} (${p.category}) → ₹${p.finalPrice.toFixed(2)}`);
});
console.log("Final Cart Total: ₹" + total.toFixed(2));
