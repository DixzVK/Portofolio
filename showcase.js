// Showcase filter
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // reset active
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
