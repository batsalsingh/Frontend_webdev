// Sample product array
const products = [
  { id: 1, name: 'Laptop',     category: 'Electronics', price: 60000, stock: 5 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 30000, stock: 2 },
  { id: 3, name: 'Shoes',      category: 'Fashion',     price: 2500,  stock: 20 },
  { id: 4, name: 'T-Shirt',    category: 'Fashion',     price: 800,   stock: 50 },
  { id: 5, name: 'Book',       category: 'Books',       price: 500,   stock: 0 },
  { id: 6, name: 'Headphones', category: 'Electronics', price: 3500,  stock: 3 },
  { id: 7, name: 'Notebook',   category: 'Stationery',  price: 150,   stock: 12 }
];

// 1. getLowStockProducts → filter
function getLowStockProducts(productsList, threshold = 5) {
  return productsList.filter(p => typeof p.stock === 'number' && p.stock < threshold);
}

// 2. sortProductsByPrice → sort (returns new array)
function sortProductsByPrice(productsList, ascending = true) {
  return [...productsList].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

// 3. calculateTotalInventoryValue → reduce
function calculateTotalInventoryValue(productsList) {
  return productsList.reduce((sum, p) => sum + (Number(p.price) * (Number(p.stock) || 0)), 0);
}

// 4. groupByCategory → reduce + object grouping
function groupByCategory(productsList) {
  return productsList.reduce((groups, p) => {
    const key = p.category || 'Uncategorized';
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
    return groups;
  }, {});
}

// Test / Demo
console.log('--- Low stock (threshold 5) ---');
console.table(getLowStockProducts(products, 5));

console.log('--- Products sorted by price (asc) ---');
console.table(sortProductsByPrice(products, true));

console.log('--- Products sorted by price (desc) ---');
console.table(sortProductsByPrice(products, false));

console.log('--- Total inventory value ---');
console.log('₹' + calculateTotalInventoryValue(products));

console.log('--- Grouped by category ---');
console.log(groupByCategory(products));