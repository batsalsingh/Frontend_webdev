const images = document.querySelectorAll(".thumb");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// OPEN MODAL
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src; // show bigger version
  });
});

// CLICK OUTSIDE → CLOSE MODAL
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// PREVENT CLOSING WHEN CLICKING INSIDE MODAL CONTENT
document.querySelector(".modal-content").addEventListener("click", (event) => {
  event.stopPropagation();  // important
});
