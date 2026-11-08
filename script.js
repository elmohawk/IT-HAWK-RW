(() => {
  document.documentElement.classList.add("js");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Portfolio category filters
  const filterButtons = document.querySelectorAll(".gallery-filter");
  const galleryCards = document.querySelectorAll(".gallery-card");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      galleryCards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-filtered", !show);
      });
    });
  });

  // WhatsApp inquiry handoff. The website does not store or transmit form data.
  const inquiryForm = document.getElementById("inquiry-form");
  const feedback = document.getElementById("form-feedback");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!inquiryForm.reportValidity()) return;
      const data = new FormData(inquiryForm);
      const value = (key) => String(data.get(key) || "").trim();
      const lines = [
        "Hello IT HAWK RW! I'd like to make a project inquiry.",
        "",
        "Name: " + value("name"),
        "Email: " + (value("email") || "Not provided"),
        "Service: " + value("service"),
        "Budget: " + (value("budget") || "Not specified"),
        "",
        "Project details:",
        value("message")
      ];
      const url = "https://wa.me/250794669266?text=" + encodeURIComponent(lines.join("\n"));
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = url;
      if (feedback) feedback.textContent = "Your inquiry is prepared. Complete sending it in WhatsApp.";
    });
  }
})();