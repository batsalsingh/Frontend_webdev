const API_URL = "http://localhost:3000/employees";
const listContainer = document.getElementById("employee-list");
const errorBox = document.getElementById("error-box");

function fetchEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      renderEmployees(employees);
    } else {
      showError("Failed to load employees.");
    }
  };

  xhr.onerror = function () {
    showError("Network error while fetching data.");
  };

  xhr.send();
}

function renderEmployees(employees) {
  listContainer.innerHTML = "";

  employees.forEach((emp) => {
    const li = document.createElement("li");
    li.className = "employee-card";

    const isActive = emp.status === "active";

    li.innerHTML = `
            <div class="emp-info">
                <span class="emp-name">${emp.name}</span>
                <span class="emp-status ${
                  isActive ? "status-active" : "status-inactive"
                }" id="status-text-${emp.id}">
                    ${isActive ? "Active" : "Inactive"}
                </span>
            </div>
            <label class="switch">
                <input type="checkbox" id="toggle-${emp.id}" ${
      isActive ? "checked" : ""
    }>
                <span class="slider"></span>
            </label>
        `;

    listContainer.appendChild(li);

    const toggleInput = li.querySelector(`#toggle-${emp.id}`);
    toggleInput.addEventListener("change", () =>
      handleToggle(emp.id, toggleInput)
    );
  });
}

function handleToggle(id, checkbox) {
  const isChecked = checkbox.checked;
  const newStatus = isChecked ? "active" : "inactive";
  const statusTextEl = document.getElementById(`status-text-${id}`);

  updateUIStatus(statusTextEl, isChecked);
  hideError();

  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", `${API_URL}/${id}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  const payload = JSON.stringify({ status: newStatus });

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(`ID ${id} updated to ${newStatus}`);
    } else {
      revertUI(checkbox, statusTextEl, !isChecked);
      showError(`Server Error: Could not update ${id}.`);
    }
  };

  xhr.onerror = function () {
    revertUI(checkbox, statusTextEl, !isChecked);
    showError("Network Error: Request failed.");
  };

  xhr.send(payload);
}

function updateUIStatus(element, isActive) {
  element.textContent = isActive ? "Active" : "Inactive";
  if (isActive) {
    element.classList.remove("status-inactive");
    element.classList.add("status-active");
  } else {
    element.classList.remove("status-active");
    element.classList.add("status-inactive");
  }
}

function revertUI(checkbox, statusTextEl, originalState) {
  checkbox.checked = originalState;
  updateUIStatus(statusTextEl, originalState);
}

function showError(msg) {
  errorBox.textContent = msg;
  errorBox.style.display = "block";
  setTimeout(() => {
    errorBox.style.display = "none";
  }, 3000);
}

function hideError() {
  errorBox.style.display = "none";
}

fetchEmployees();
