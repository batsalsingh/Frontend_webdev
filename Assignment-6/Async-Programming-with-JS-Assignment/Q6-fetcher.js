import fetch from "node-fetch";

const API_URL = "https://dummyjson.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const products = data.products; // dummyjson wraps products in an object

        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.thumbnail}`);
            console.log("--------------------------------------");
        });

    } catch (error) {
        console.error("❌ Error fetching products:", error);
    }
}

fetchProducts();
