const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const q = faq.querySelector(".question");
  const a = faq.querySelector(".answer");
  const inp = faq.querySelector("input");

  q.onclick = () => {
    a.style.display = a.style.display === "block" ? "none" : "block";
  };

  q.onmouseover = () => {
    q.style.color = "blue";
  };

  q.onmouseout = () => {
    q.style.color = "black";
  };

  q.ondblclick = () => {
    document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
  };

  inp.onfocus = () => {
    faq.classList.add("highlight-box");
  };

  inp.onblur = () => {
    faq.classList.remove("highlight-box");
  };
});