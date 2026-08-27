import { useEffect, useRef, createElement, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number;
  href?: string;
  children: ReactNode;
};

/**
 * يكرر بالضبط سلوك aboutObserver في main.js الأصلي:
 * IntersectionObserver بـ threshold: 0.50 يضيف كلاس "show"
 * (بدون إزالته) لتشغيل انتقالات CSS المعرّفة في main.css.
 */
export default function Reveal({
  as = "div",
  className = "",
  style,
  threshold = 0.5,
  href,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return createElement(as, { ref, className, style, href }, children);
}
