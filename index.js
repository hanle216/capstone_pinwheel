const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});
