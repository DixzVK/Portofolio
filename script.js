// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
hamburger?.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Close nav on link click (mobile)
navbar?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", ()=> navbar.classList.remove("show"));
});

// Reveal on scroll
const onScrollReveal = () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) el.classList.add("active");
  });
};
window.addEventListener("scroll", onScrollReveal);
window.addEventListener("load", onScrollReveal);

// Back to top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll",()=>{
  if (window.scrollY > 450) toTop.classList.add("show");
  else toTop.classList.remove("show");
});
toTop?.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

