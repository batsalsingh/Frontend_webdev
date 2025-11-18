// ES6 Class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount (10%)
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display details using template literals
    getDetails = () => {
        return `
            <p>
                <strong>ID:</strong> ${this.id}<br>
                <strong>Name:</strong> ${this.name}<br>
                <strong>Price:</strong> ₹${this.price}<br>
                <strong>Category:</strong> ${this.category}
            </p>
        `;
    };
}

// Array to store products
const productList = [];

const addBtn = document.getElementById("addBtn");
const msg = document.getElementById("msg");
const output = document.getElementById("output");

addBtn.addEventListener("click", () => {
    const id = document.getElementById("pid").value;
    const name = document.getElementById("pname").value;
    const price = Number(document.getElementById("pprice").value);
    const category = document.getElementById("pcategory").value;

    // DOM Validation
    if (!id || !name || !price || !category) {
        msg.textContent = "All fields are required!";
        msg.style.color = "red";
        return;
    }

    // Create object
    const product = new Product(id, name, price, category);

    // Apply 10% discount using method
    product.applyDiscount(10);

    // Add to array
    productList.push(product);

    msg.textContent = "Product added successfully!";
    msg.style.color = "green";

    // Show product on webpage
    output.innerHTML += product.getDetails();

    // Filter products > 1000 and show in console
    const expensive = productList.filter(p => p.price > 1000);
    console.log("Products with price > 1000:");
    console.log(expensive.map(p => p.getDetails()));
});
