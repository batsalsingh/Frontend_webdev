const usersEl = document.getElementById("users-count");
const ordersEl = document.getElementById("orders-count");
const productsEl = document.getElementById("products-count");
const errorBanner = document.getElementById("error-banner");

const API_BASE = "http://localhost:3000";

function loadDashboard() {
  const usersPromise = fetch(`${API_BASE}/users`).then((res) => {
    if (!res.ok) throw new Error("Users failed");
    return res.json();
  });

  const ordersPromise = fetch(`${API_BASE}/orders`).then((res) => {
    if (!res.ok) throw new Error("Orders failed");
    return res.json();
  });

  const productsPromise = fetch(`${API_BASE}/products`).then((res) => {
    if (!res.ok) throw new Error("Products failed");
    return res.json();
  });

  Promise.all([usersPromise, ordersPromise, productsPromise])
    .then(([users, orders, products]) => {
      updateCard(usersEl, users.length);
      updateCard(ordersEl, orders.length);
      updateCard(productsEl, products.length);
    })
    .catch((err) => {
      console.error(err);
      errorBanner.style.display = "block";

      removeSkeleton(usersEl);
      removeSkeleton(ordersEl);
      removeSkeleton(productsEl);

      usersEl.textContent = "-";
      ordersEl.textContent = "-";
      productsEl.textContent = "-";
    });
}

function updateCard(element, value) {
  removeSkeleton(element);
  element.textContent = value;
}

function removeSkeleton(element) {
  element.classList.remove("skeleton");
}

loadDashboard();
