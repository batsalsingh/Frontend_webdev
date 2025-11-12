//Store the product name with messy spacing and casing
let productName = " wireless headphones PRO ";

//Trim extra spaces
productName = productName.trim(); // removes leading/trailing spaces

//Convert to lowercase for consistent formatting
productName = productName.toLowerCase(); // "wireless headphones pro"

//Capitalize the first letter of each word
productName = productName
  .split(" ") // split into words → ['wireless', 'headphones', 'pro']
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
  .join(" "); // join back into a single string

//Replace "Pro" with "Pro Edition"
productName = productName.replace("Pro", "Pro Edition");

// Display cleaned title and its length
console.log("🛒 Cleaned Product Title:", productName);
console.log("📏 Title Length:", productName.length);
