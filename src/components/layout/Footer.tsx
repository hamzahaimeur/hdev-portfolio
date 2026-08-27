import Reveal from "@/components/ui/Reveal";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const features = [
  {
    icon: "fa-solid fa-code",
    title: "Clean Code",
    text: "Maintainable & scalable development.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Performance",
    text: "Fast loading & optimized experience.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Reliable",
    text: "Stable, secure and modern solutions.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Responsive",
    text: "Perfect on desktop, tablet and mobile.",
  },
];

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <Reveal className="footer-top">
          <div className="footer-brand">
            <img src="/assets/brand/brand.png" alt="brand" className="brand" />

            <p>
              I build modern, responsive and high-performance web experiences
              with clean code and elegant UI.
            </p>

            <Reveal className="footer-social">
              <a
                href="https://github.com/hamzahaimeur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/hamzahaimeur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </Reveal>
          </div>

          <div className="footer-links">
            <Reveal className="footer-column">
              <h3>Navigation</h3>

              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <i className="fa-solid fa-angle-right"></i>
                  {link.label}
                </a>
              ))}
            </Reveal>

            <Reveal className="footer-column footer-vision">
              <h3>Vision</h3>

              <div className="vision-box">
                <i className="fa-solid fa-quote-left"></i>

                <p>
                  Turning ideas into elegant, fast, and memorable digital
                  experiences.
                </p>
              </div>
            </Reveal>

            <Reveal className="footer-column">
              <h3>Contact</h3>

              <a href="#contact">
                <i className="fa-solid fa-envelope"></i>
                hamzahaimeur01@gmail.com
              </a>

              <a>
                <i className="fa-solid fa-location-dot"></i>
                Morocco
              </a>
            </Reveal>
          </div>
        </Reveal>

        <div className="footer-features">
          {features.map((feature) => (
            <Reveal key={feature.title} className="feature-box">
              <i className={feature.icon}></i>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="footer-bottom">
          <p>© 2026 Hamza Haimeur. All Rights Reserved.</p>

          <div className="footer-made">
            <i className="fa-solid fa-heart"></i>
            <span>Made with Passion & Pure HTML, CSS and JavaScript</span>
          </div>

          <Reveal as="a" href="#home" className="back-top">
            <i className="fa-solid fa-arrow-up"></i>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
