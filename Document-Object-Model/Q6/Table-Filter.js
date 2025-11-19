const searchBox = document.getElementById("searchBox");
const tableBody = document.getElementById("tableBody");
const noResults = document.getElementById("noResults");

// Real-time search
searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();
  let visibleCount = 0;

  const rows = tableBody.querySelectorAll("tr");
  
  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(keyword)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  // Show "no results" message
  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
