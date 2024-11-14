// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-md");
  } else {
    nav.classList.remove("shadow-md");
  }
});
