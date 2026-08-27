import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import Reveal from "@/components/ui/Reveal";
import Toast, { type ToastState } from "@/components/ui/Toast";
import { socialLinks } from "@/lib/site-config";

const EMAILJS_PUBLIC_KEY = "YQoIq8g067FVtMpYK";
const EMAILJS_SERVICE_ID = "service_uox0u1g";
const EMAILJS_TEMPLATE_ID = "template_j8v5znn";

type ContactCard = {
  icon: string;
  title: string;
  value: string;
};

const contactCards: ContactCard[] = [
  { icon: "fa-regular fa-envelope", title: "Email", value: "hamzahaimeur01@gmail.com" },
  { icon: "fa-solid fa-rocket", title: "Freelance", value: "Available for Hire" },
  { icon: "fa-solid fa-location-dot", title: "Location", value: "Morocco" },
  { icon: "fa-regular fa-clock", title: "Availability", value: "Available Remote Work" },
];

const bannerFeatures = [
  "Clean & Modern Design",
  "Responsive & Mobile First",
  "Fast & Reliable Performance",
  "Scalable & Maintainable Code",
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function showToast(title: string, message: string, success = true) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ title, message, success, key: Date.now() });
    timerRef.current = setTimeout(() => setToast(null), 4000);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      showToast("Incomplete Form", "Please fill in all required fields.", false);
      return;
    }

    setSending(true);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name,
        email,
        subject,
        message,
      });

      showToast("Message Sent", "Thanks! I'll get back to you as soon as possible.", true);
      form.reset();
    } catch (error) {
      console.error(error);
      showToast("Sending Failed", "Something went wrong. Please try again.", false);
    }

    setSending(false);
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-top">
          <Reveal className="contact-content">
            <span className="badge">
              <i className="fa-solid fa-code"></i>
              GET IN TOUCH
            </span>

            <h1>
              Let's Work <span>Together</span>
            </h1>

            <p>
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's build
              something amazing together InShaaAllah.
            </p>

            <div className="contact-cards">
              {contactCards.map((card) => (
                <Reveal key={card.title} className="contact-card">
                  <div className="icon">
                    <i className={card.icon}></i>
                  </div>

                  <div className="info">
                    <h4>{card.title}</h4>
                    <span>{card.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="socials">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </Reveal>
          </Reveal>

          <Reveal className="contact-form-card">
            <h3>
              <i className="fa-solid fa-circle"></i>
              Send Me a Message
            </h3>

            <p>Fill out the form below and I'll get back to you soon InShaaAllah.</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-box">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" />
                </div>

                <div className="input-box">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" />
                </div>
              </div>

              <div className="input-box">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" />
              </div>

              <div className="input-box">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={7}></textarea>
              </div>

              <div className="form-bottom">
                <button type="submit" className="btn-contact" disabled={sending}>
                  {sending ? (
                    <>
                      Sending <i className="fa-solid fa-spinner fa-spin"></i>
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>

                <span className="reply-info">
                  <i className="fa-solid fa-circle-check"></i>
                  Replies as soon as possible
                </span>
              </div>

              <div className="form-decoration">
                <i className="fa-solid fa-code"></i>

                <div className="signature">
                  <span>Crafted by</span>
                  <h4>Hamza Haimeur</h4>
                </div>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal className="contact-banner">
          <div className="banner-icon">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <div className="banner-content">
            <h2>
              Let's turn your ideas into <span>reality</span>
            </h2>

            <p>Whether it's a website, or a creative idea — I'm here to help build it.</p>

            <div className="banner-features">
              {bannerFeatures.map((feature) => (
                <Reveal key={feature} className="feature">
                  <i className="fa-solid fa-check"></i>
                  <span>{feature}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Toast toast={toast} />
    </section>
  );
}
