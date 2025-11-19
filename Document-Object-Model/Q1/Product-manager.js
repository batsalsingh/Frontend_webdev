const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Add product
addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    createListItem(text);
    input.value = "";
});

// Create product item
function createListItem(text) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="pText">${text}</span>
        <button class="editBtn">Edit</button>
        <button class="delBtn">Delete</button>
    `;

    productList.appendChild(li);
}

// Event Delegation
productList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.classList.contains("delBtn")) {
        li.remove();
        return;
    }

    if (e.target.classList.contains("editBtn")) {
        enableEdit(li);
    }
});

// Inline editing with fixed outside-click logic
function enableEdit(li) {
    const textSpan = li.querySelector(".pText");
    const oldText = textSpan.textContent;

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.value = oldText;
    inputBox.className = "edit-input";

    textSpan.replaceWith(inputBox);
    inputBox.focus();

    const save = () => {
        const newValue = inputBox.value.trim() || oldText;

        const span = document.createElement("span");
        span.className = "pText";
        span.textContent = newValue;

        inputBox.replaceWith(span);
        document.removeEventListener("click", outsideClick);
    };

    // FIX: delay attaching outside click listener to avoid instant closing
    const outsideClick = (event) => {
        if (event.target !== inputBox) save();
    };

    inputBox.addEventListener("blur", save);

    setTimeout(() => {
        document.addEventListener("click", outsideClick);
    }, 50);
}
