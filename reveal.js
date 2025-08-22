// reveal.js
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // animasi masuk
          } else {
            entry.target.classList.remove("active"); // reset agar bisa animasi lagi
          }
        });
      },
      { threshold: 0.15 }
    );
  
    reveals.forEach((el) => observer.observe(el));
  });
  