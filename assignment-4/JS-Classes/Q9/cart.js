// Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    // Calculate total price
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + (item.price * item.qty);
        }, 0);
    }

    // Apply coupon and give discount %
    applyCoupon(coupon) {
        // Valid coupon format: SAVE20, DISC10, SAVE50, DISC30 etc.
        const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;

        if (!couponRegex.test(coupon)) {
            return { valid: false, discount: 0 };
        }

        const discount = parseInt(coupon.match(/\d+/)[0]);
        return { valid: true, discount };
    }
}

const cart = new Cart();
const itemsList = document.getElementById("itemsList");
const result = document.getElementById("result");
const couponErr = document.getElementById("couponErr");

// Add item button
document.getElementById("addBtn").addEventListener("click", () => {
    const name = document.getElementById("itemName").value;
    const price = Number(document.getElementById("itemPrice").value);
    const qty = Number(document.getElementById("itemQty").value);

    if (!name || !price || !qty) {
        alert("Fill all item fields!");
        return;
    }

    cart.addItem(name, price, qty);

    itemsList.innerHTML += `<p>${name} — ₹${price} × ${qty}</p>`;
});

// Calculate total and apply coupon
document.getElementById("totalBtn").addEventListener("click", () => {
    const coupon = document.getElementById("coupon").value.trim();

    const { valid, discount } = cart.applyCoupon(coupon);

    let total = cart.getTotal();

    if (coupon === "") {
        // No coupon applied
        couponErr.textContent = "";
        result.innerHTML = `Total: ₹${total}`;
        return;
    }

    if (!valid) {
        couponErr.textContent = "Invalid Coupon Format!";
        result.textContent = "";
        return;
    }

    couponErr.textContent = "";

    // Apply discount
    const finalTotal = total - (total * discount / 100);

    result.innerHTML = `
        <span class="success">
            Coupon Applied: ${discount}% Off<br>
            Original Total: ₹${total}<br>
            Final Total: ₹${finalTotal}
        </span>
    `;
});
