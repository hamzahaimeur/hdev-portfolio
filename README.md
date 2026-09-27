# Front End — Portfolio Template

A modern, responsive Front-End Developer portfolio template built with pure HTML, CSS and JavaScript (no framework, no build step required).

**Live demo:** https://hdev-portfolio1.vercel.app/

---

## 1. Project Structure

```text
.
├── assets/
│   ├── brand/        → logo files (navbar, mobile menu, favicon set)
│   ├── cv/            → CV/resume PDF, linked from the "Download CV" button
│   ├── fonts/         → Poppins font files
│   └── projects/      → project thumbnail images
├── css/
│   ├── main.css       → styles for the main page
│   └── project.css    → styles for individual project pages
├── projects/           → one folder per project, each with its own index.html
├── index.html          → the main portfolio page
├── main.js             → navigation, mobile menu, contact form, scroll effects
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 2. How the Page is Organized

`index.html` is a single page split into sections, each one an `id` you can jump to from the navbar:

| Section | id | What it contains |
|---|---|---|
| Home | `#home` | Name, short intro, "View My Work" / "Download CV" buttons, social links |
| About | `#about` | Bio text, feature badges, profile card, stats |
| Skills | `#skills` | Skill cards (React, Next.js, TypeScript, Tailwind...), tools grid, progress bars |
| Projects | `#portfolio` | Empty `projects-grid` — add your project cards here (see below) |
| Contact | `#contact` | Contact info cards, contact form, banner |

---

## 3. Customize the Content

1. **Name & title** — replace `FRONT END` in the hero section and `Front End` in the profile card, footer signature and footer copyright with your own name.
2. **Bio & skills** — edit the text inside `#about` and `#skills` to match your own experience and stack.
3. **CV** — replace `assets/cv/your-cv.pdf` with your own PDF, keep the same filename or update the link in `index.html`.
4. **Social links & email** — replace every `github.com/yourusername`, `linkedin.com/in/yourusername`, and `youremail@example.com` in `index.html` with real links.
5. **Domain** — the canonical URL, `og:url`, `og:image`, and `sitemap.xml`/`robots.txt` are already set to `https://hdev-portfolio1.vercel.app/`; update them if you deploy to a different domain.

---

## 4. Add Your Projects

The `#portfolio` section's `.projects-grid` comes with 3 ready-made placeholder cards — just replace the image, title, description, tech tags and links with your own project's info. To add more, copy this block inside the grid and fill in your own content:

```html
<div class="project-card">
  <div class="project-image">
    <img src="assets/projects/your-image.png" alt="Project">
  </div>
  <div class="project-info">
    <span class="project-type">Frontend Project</span>
    <h3>Project Name</h3>
    <p>Short project description.</p>
    <div class="project-tech">
      <span><i class="fa-brands fa-react"></i> React</span>
    </div>
    <div class="project-links">
      <a href="projects/your-project/" class="project-view">
        View Project <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="https://your-live-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
        Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </div>
</div>
```

For a project's own detail page, duplicate one of the folders inside `projects/` (each contains its own `index.html`, `project.js` and `project-nav.js`) and edit its content.

---

## 5. Contact Form

The contact form uses EmailJS (loaded via CDN in `index.html`). To make it functional, create a free account at emailjs.com and configure your Service ID, Template ID, and Public Key inside `main.js`.

---

## 6. Deploy

No build step needed. Deploy the folder as-is to any static host (Vercel, Netlify, GitHub Pages, etc.) — just set `index.html` as the entry point.

---

## 7. Requirements

- No dependencies to install.
- Uses Font Awesome (via CDN) for icons and Poppins (local font files) for typography.
