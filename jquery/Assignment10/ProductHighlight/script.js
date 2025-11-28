const products = document.querySelectorAll(".product");

products.forEach(p => {
  p.onclick = () => {
    if (p.dataset.stock === "out") {
      alert("This product is out of stock!");
      return;
    }
    products.forEach(x => x.classList.remove("highlight"));
    p.classList.add("highlight");
  };

  p.onmouseover = () => {
    p.querySelector(".details").style.display = "block";
  };

  p.onmouseout = () => {
    p.querySelector(".details").style.display = "none";
  };

  p.querySelector(".favorite").onclick = (e) => {
    e.stopPropagation();
    e.target.classList.toggle("selected");
  };
});