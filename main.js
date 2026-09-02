// --- nav scrolled ---

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- links --- 

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a, .mobile-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${id}`
        );
      });

    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));

// --- brand ---

const scrollTopElements = document.querySelectorAll(".brand, .back-top");

scrollTopElements.forEach((element) => {
  element.addEventListener("click", (e) => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// --- animation ---

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.50
});

document.querySelectorAll(`
  .about-content,
  .profile-card,
  .title-skills,
  .skill-card,
  .stat,

  .skills-top,
  .skills-illustration,
  .tool,
  .bring-item,

  .portfolio-header,
  .project-card,
  .cta-box,

  .contact-content,
  .contact-form-card,
  .contact-card,
  .contact .socials,
  .contact-banner,
  .banner-features .feature,

  .footer-top,
  .footer-column,
  .footer-social,
  .feature-box,
  .footer-bottom,
  .back-top
`).forEach(el => {
  aboutObserver.observe(el);
});

// --- mobile menu ---

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".mobile-links a");
const mobileBtn = document.querySelector(".mobile-btn");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

links.forEach(link => {
  link.addEventListener("click", closeMenu);
});

mobileBtn.addEventListener("click", closeMenu);

// --- form ---

emailjs.init({
  publicKey: "YQoIq8g067FVtMpYK",
});

const form = document.querySelector("form");
const toast = document.querySelector(".success-toast");

function showToast(title, message, success = true) {
  const icon = toast.querySelector("i");
  const heading = toast.querySelector("h4");
  const text = toast.querySelector("p");

  heading.textContent = title;
  text.textContent = message;

  if (success) {
    icon.className = "fa-solid fa-check";
    toast.classList.remove("error");
  } else {
    icon.className = "fa-solid fa-xmark";
    toast.classList.add("error");
  }

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector(".btn-contact");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    showToast(
      "Incomplete Form",
      "Please fill in all required fields.",
      false
    );
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `Sending <i class="fa-solid fa-spinner fa-spin"></i>`;

  try {
    await emailjs.send("service_uox0u1g", "template_j8v5znn", {
      name,
      email,
      subject,
      message,
    });

    showToast(
      "Message Sent",
      "Thanks! I'll get back to you as soon as possible.",
      true
    );

    form.reset();

  } catch (error) {
    console.error(error);

    showToast(
      "Sending Failed",
      "Something went wrong. Please try again.",
      false
    );
  }

  btn.disabled = false;
  btn.innerHTML = `
    Send Message
    <i class="fa-solid fa-paper-plane"></i>
  `;
});
