import { useEffect, useRef, useState } from "react";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { navLinks } from "@/lib/site-config";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const navbarRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  /** On sub-pages the hash links must first go back to the home route. */
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  // --- nav scrolled --- (same behavior as main.js)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- active link on scroll (IntersectionObserver, same threshold as main.js) ---
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveHash(`#${entry.target.id}`);
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  // --- lock body scroll when mobile menu is open ---
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} ref={navbarRef}>
        <div className="navbar-inner">
          <img src="/assets/brand/brand.png" alt="brand" className="brand" onClick={goHome} />

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={isHome && activeHash === link.href ? "active" : ""}
                  href={hrefFor(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={hrefFor("#contact")} className="btn">
            Let&apos;s Talk
            <i className="fa-regular fa-comment"></i>
          </a>

          <button className="menu-btn" aria-label="Open Menu" onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        <div className="menu-top">
          <a href="/" className="logo" onClick={goHome}>
            <img src="/assets/brand/brand-4.png" alt="Logo" />
          </a>

          <button className="close-btn" onClick={closeMenu} aria-label="Close Menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={hrefFor(link.href)} onClick={closeMenu}>
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href={hrefFor("#contact")} className="mobile-btn" onClick={closeMenu}>
          Let&apos;s Talk
          <i className="fa-regular fa-comment"></i>
        </a>
      </div>

      <div className={`overlay${menuOpen ? " active" : ""}`} onClick={closeMenu}></div>
    </>
  );
}
