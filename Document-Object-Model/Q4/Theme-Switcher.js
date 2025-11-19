const buttons = document.querySelectorAll(".themeBtn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedTheme = btn.getAttribute("data-theme");

    // Set the theme using setAttribute()
    document.body.setAttribute("data-theme", selectedTheme);
  });
});
