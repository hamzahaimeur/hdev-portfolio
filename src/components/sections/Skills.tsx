import Reveal from "@/components/ui/Reveal";

const coreSkills = [
  {
    cardClass: "skill-card react-card",
    iconClass: "fa-brands fa-react react-icon",
    title: "React",
    description: "Reusable components and efficient state management.",
  },
  {
    cardClass: "skill-card nextjs-card",
    iconClass: "fa-solid fa-n nextjs-icon",
    title: "Next.js",
    description: "Server-side rendering and optimized performance.",
  },
  {
    cardClass: "skill-card ts-card",
    iconClass: "fa-solid fa-code ts-icon",
    title: "TypeScript",
    description: "Type-safe and scalable code.",
  },
  {
    cardClass: "skill-card tailwind-card",
    iconClass: "fa-brands fa-css3 tailwind-icon",
    title: "Tailwind CSS",
    description: "Fast styling with utility-first classes.",
  },
];

const tools = [
  { icon: "fa-solid fa-code", label: "VS Code" },
  { icon: "fa-brands fa-git-alt", label: "Git" },
  { icon: "fa-brands fa-github", label: "GitHub" },
  { icon: "fa-solid fa-wand-magic-sparkles", label: "Prettier" },
];

const bringItems = [
  { label: "Clean Code", percent: 100 },
  { label: "Responsive Design", percent: 100 },
  { label: "Problem Solving", percent: 100 },
  { label: "Performance", percent: 100 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <Reveal className="skills-top">
          <div className="skills-content">
            <span className="badge">
              <i className="fa-solid fa-code"></i>
              MY EXPERTISE
            </span>

            <h1>
              Skills &amp; <span>Technologies</span>
            </h1>

            <p>
              I build modern, responsive and performant web
              experiences with clean code and best practices.
            </p>
          </div>

          <div className="skills-illustration">
            <i className="fa-solid fa-code"></i>
          </div>
        </Reveal>

        <Reveal as="h3" className="title-skills">
          <span></span>
          Core Skills
          <span></span>
        </Reveal>

        <div className="skills-cards">
          {coreSkills.map((skill) => (
            <Reveal key={skill.title} className={skill.cardClass}>
              <div className="skill-head">
                <i className={skill.iconClass}></i>

                <div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="skills-bottom">
          <div className="tools">
            <Reveal as="h3" className="title-skills">
              <span></span>
              Technologies &amp; Tools
              <span></span>
            </Reveal>

            <div className="tools-grid">
              {tools.map((tool) => (
                <Reveal key={tool.label} className="tool">
                  <i className={tool.icon}></i>
                  <span>{tool.label}</span>
                </Reveal>
              ))}
            </div>

            <div className="skills-line"></div>
          </div>

          <div className="what-i-bring">
            <h3>What I Bring</h3>

            {bringItems.map((item) => (
              <Reveal key={item.label} className="bring-item">
                <div className="bring-head">
                  <span>{item.label}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="progress">
                  <span style={{ width: `${item.percent}%` }}></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
