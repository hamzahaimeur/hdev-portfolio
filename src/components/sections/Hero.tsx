import { socialLinks } from "@/lib/site-config";

export default function Hero() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="frontend-badge">
          <i className="fa-solid fa-code"></i>
          <span>FRONT END DEVELOPER</span>
        </div>

        <div className="muslim-badge">
          <i className="fa-solid fa-moon"></i>
          <code>Assalamu Alaikum wa Rahmatullah wa Barakatuh</code>
        </div>

        <h1 className="home-title">
          <span className="subtitle">My Name</span>
          <span className="name">HAMZA HAIMEUR</span>
        </h1>

        <p className="home-description">
          I craft modern, responsive and high-performance web
          interfaces with clean code and exceptional user experience.
        </p>

        <div className="home-buttons">
          <a href="#portfolio" className="btn-primary">
            View My Work
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>

          <a
            href="/assets/cv/hamzahaimeur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download CV
            <i className="fa-solid fa-file-arrow-down"></i>
          </a>
        </div>

        <div className="connect">
          <span>LET&apos;S CONNECT</span>
          <div className="socials">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="home-image">
        <img src="/assets/portfolio/home.jpg" alt="Hamza Haimeur" />
      </div>
    </div>
  );
}
