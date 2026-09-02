// Project-page navigation behavior; keeps the existing home navbar behavior unchanged.
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const mobileLinks = document.querySelectorAll(".mobile-links a");
const mobileBtn = document.querySelector(".mobile-btn");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.add("active");
  overlay?.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu?.classList.remove("active");
  overlay?.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn?.addEventListener("click", closeMenu);
overlay?.addEventListener("click", closeMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
mobileBtn?.addEventListener("click", closeMenu);

document.querySelector(".brand")?.addEventListener("click", () => {
  window.location.href = "../../";
});
