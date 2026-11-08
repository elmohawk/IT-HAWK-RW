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


  // Service detail popups
  const serviceDetails = {
    "graphic-design": {icon:"✳",title:"Graphic Design",intro:"Make your message stand out with polished, purposeful visuals designed for digital platforms and print.",items:["Posters, flyers and brochures","Social media posts, banners and campaign graphics","Event, business and promotional artwork","Print-ready layouts and resizing for different formats"],tags:"POSTERS · FLYERS · SOCIAL MEDIA"},
    "branding": {icon:"◈",title:"Branding & Logos",intro:"Build a recognisable identity with a consistent visual system that helps people remember and trust your brand.",items:["Custom logo concepts and refinements","Colour palettes and typography selection","Business cards, letterheads and brand stationery","Simple brand guidelines and asset preparation"],tags:"LOGOS · BRAND IDENTITY · GUIDELINES"},
    "web-development": {icon:"⌘",title:"Web Development",intro:"Give your business a strong online home with responsive websites designed to work across phones, tablets and computers.",items:["Business and portfolio websites","Landing pages and product or service pages","Responsive layouts and user interface design","Website updates, maintenance and practical integrations"],tags:"WEBSITES · UI · WEB SOLUTIONS"},
    "video-photo": {icon:"▶",title:"Video & Photography",intro:"Turn moments, products and ideas into compelling visual stories for your brand and audience.",items:["Video editing for social media and promotions","Short-form reels and vertical content","Photo editing and image enhancement","Promotional, event and behind-the-scenes content"],tags:"VIDEO EDITING · PHOTO · CONTENT"},
    "printing": {icon:"▧",title:"Printing & Production",intro:"Prepare creative designs for physical production, with attention to layout, sizing and output requirements.",items:["CorelDRAW artwork and print layouts","Plotter-cut graphics and lettering preparation","Heat-press designs for apparel and merchandise","Flyers, posters, stickers and other print materials"],tags:"CORELDRAW · PLOTTER · HEAT PRESS"},
    "digital-solutions": {icon:"⌁",title:"Digital Solutions",intro:"Get practical creative and digital support to help your work run more smoothly and professionally.",items:["Digital setup guidance and consultation","Creative workflow and software support","Online presence and content guidance","Tailored solutions based on your project needs"],tags:"DIGITAL SUPPORT · CONSULTATION"}
  };
  const serviceDialog = document.getElementById("service-dialog");
  if (serviceDialog) {
    const closeDialog = serviceDialog.querySelector(".service-dialog-close");
    const dialogTitle = document.getElementById("service-dialog-title");
    const dialogIcon = document.getElementById("service-dialog-icon");
    const dialogIntro = document.getElementById("service-dialog-intro");
    const dialogList = document.getElementById("service-dialog-list");
    const dialogTags = document.getElementById("service-dialog-tags");
    const dialogCta = document.getElementById("service-dialog-cta");
    document.querySelectorAll("[data-open-service]").forEach((button) => {
      button.addEventListener("click", () => {
        const detail = serviceDetails[button.dataset.openService];
        if (!detail) return;
        dialogIcon.textContent = detail.icon;
        dialogTitle.textContent = detail.title;
        dialogIntro.textContent = detail.intro;
        dialogList.replaceChildren(...detail.items.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        }));
        dialogTags.textContent = detail.tags;
        dialogCta.href = "https://wa.me/250794669266?text=" + encodeURIComponent("Hello IT HAWK RW, I'm interested in your " + detail.title + " service. Please share more information.");
        if (typeof serviceDialog.showModal === "function") serviceDialog.showModal();
        else serviceDialog.setAttribute("open", "");
      });
    });
    closeDialog.addEventListener("click", () => serviceDialog.close ? serviceDialog.close() : serviceDialog.removeAttribute("open"));
    serviceDialog.addEventListener("click", (event) => {
      if (event.target === serviceDialog) serviceDialog.close ? serviceDialog.close() : serviceDialog.removeAttribute("open");
    });
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