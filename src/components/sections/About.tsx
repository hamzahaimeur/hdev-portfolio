import Reveal from "@/components/ui/Reveal";
import { socialLinks } from "@/lib/site-config";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-top">
          <Reveal className="about-content">
            <span className="badge">
              <i className="fa-solid fa-code"></i>
              WHO I AM
            </span>

            <h1>
              About <span>Me</span>
            </h1>

            <p>
              I&apos;m Hamza Haimeur, a passionate Front End Developer who
              loves crafting modern, responsive and user-friendly web
              interfaces using{" "}
              <strong className="react">React</strong>,{" "}
              <strong className="nextjs">Next.js</strong>,{" "}
              <strong className="ts">TypeScript</strong> and{" "}
              <strong className="tailwind">Tailwind CSS</strong>.
            </p>

            <div className="features">
              <div className="feature">
                <i className="fa-solid fa-code"></i>
                <span>Clean Code</span>
              </div>

              <div className="feature">
                <i className="fa-solid fa-desktop"></i>
                <span>Responsive Design</span>
              </div>

              <div className="feature">
                <i className="fa-solid fa-pen-ruler"></i>
                <span>Great UI/UX</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="profile-card">
            <div className="avatar-ring">
              <img src="/assets/brand/brand-3.png" alt="" />
            </div>

            <h2>Hamza Haimeur</h2>
            <p>Front End Developer</p>

            <div className="socials">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="stats">
          <Reveal as="div" className="stat">
            <i className="fa-solid fa-rocket"></i>
            <h2>3+</h2>
            <p>Projects Completed</p>
          </Reveal>

          <Reveal as="div" className="stat">
            <i className="fa-regular fa-clock"></i>
            <h2>6+</h2>
            <p>Months Learning</p>
          </Reveal>

          <Reveal as="div" className="stat">
            <i className="fa-solid fa-code"></i>
            <h2>100%</h2>
            <p>Frontend Focus</p>
          </Reveal>

          <Reveal as="div" className="stat">
            <i className="fa-regular fa-heart"></i>
            <h2>Passion</h2>
            <p>For Clean Code</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
