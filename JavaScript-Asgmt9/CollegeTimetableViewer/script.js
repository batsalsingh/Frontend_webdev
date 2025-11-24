const daySelector = document.getElementById("day-selector");
const tableContainer = document.getElementById("table-container");
const scheduleBody = document.getElementById("schedule-body");
const noClassesMsg = document.getElementById("no-classes-msg");

const API_URL = "http://localhost:3000/timetable";

daySelector.addEventListener("change", (e) => {
  const day = e.target.value;
  fetchSchedule(day);
});

function fetchSchedule(day) {
  fetch(`${API_URL}?day=${day}`)
    .then((response) => response.json())
    .then((data) => renderSchedule(data))
    .catch((error) => console.error("Error:", error));
}

function renderSchedule(data) {
  scheduleBody.innerHTML = "";

  if (data.length === 0) {
    tableContainer.classList.add("hidden");
    noClassesMsg.classList.remove("hidden");
  } else {
    noClassesMsg.classList.add("hidden");
    tableContainer.classList.remove("hidden");

    data.forEach((classItem) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td style="font-weight:bold; color:#555;">${classItem.time}</td>
                <td style="color:#2c3e50;">${classItem.subject}</td>
                <td style="color:#7f8c8d;">${classItem.faculty}</td>
            `;
      scheduleBody.appendChild(row);
    });
  }
}
