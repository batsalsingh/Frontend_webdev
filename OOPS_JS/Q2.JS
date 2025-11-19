// Menu with item-price pairs
const menu = {
  burger: 120,
  pizza: 250,
  fries: 80,
  coke: 40,
  pasta: 200
};

// Function to calculate bill
function calculateBill(orderItems) {
  try {
    // Map order items to prices, throw error if item not found
    const prices = orderItems.map(item => {
      if (!menu.hasOwnProperty(item)) {
        throw new Error(`Item "${item}" is not on the menu.`);
      }
      return menu[item];
    });

    // Reduce to calculate total
    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log(`Order: ${orderItems.join(', ')}`);
    console.log(`Total Bill: ₹${total}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// 🧪 Test Cases
calculateBill(['burger', 'fries', 'coke']);       // Valid order
calculateBill(['pizza', 'pasta', 'icecream']);    // Invalid item: icecream