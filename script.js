/**
 * ===================================================================
 * PORTFOLIO CONFIGURATION & INTERACTIVE SCRIPTS
 * Santhiya S. — AI/ML Engineer Portfolio
 * ===================================================================
 */

/* ===================================================================
   1. USER CONFIGURATION — EDIT YOUR PROFILES & DETAILS HERE
   ===================================================================
   Replace the placeholder strings below with your real URLs and email.
   All links, buttons, and contact items will automatically update!
*/
const PORTFOLIO_CONFIG = {
  // Santhiya's official LinkedIn profile:
  linkedinUrl: "https://www.linkedin.com/in/santhiya-selvamani-1b95b342b",

  // Santhiya's official GitHub profile:
  githubUrl: "https://github.com/santhiyaselvamani78-ops",

  // Santhiya's official contact email:
  emailAddress: "santhiyaselvamani78@gmail.com",

  // Expected resume filename located in the project root folder:
  resumeFileName: "Santhiya_Resume.pdf"
};

/* ===================================================================
   2. INTERACTIVE SKILLS DATABASE
   ===================================================================
   Clicking any skill pill displays its explanation and practical use case.
   You can easily add, edit, or customize skills here.
*/
const SKILLS_DATA = {
  python: {
    name: "Python",
    category: "Programming Language",
    icon: "🐍",
    accent: "violet",
    explanation: "A versatile, high-level programming language essential for data science, artificial intelligence, and software development.",
    practicalUse: "Used as my primary programming language for writing modular logic, data processing, and training the House Price Prediction model.",
    related: ["NumPy", "Pandas", "Matplotlib", "Machine Learning"]
  },
  php: {
    name: "PHP",
    category: "Programming Language",
    icon: "🐘",
    accent: "blue",
    explanation: "A widely-used server-side scripting language designed for web development and relational database communication.",
    practicalUse: "Implemented in the COVID-19 Testing Management System to handle backend routing, process form submissions, and query MySQL.",
    related: ["MySQL", "HTML5", "CSS3", "JavaScript"]
  },
  html5: {
    name: "HTML5",
    category: "Web Technology",
    icon: "🌐",
    accent: "cyan",
    explanation: "The standard markup language for creating structured, semantic, and accessible web documents.",
    practicalUse: "Applied across all web applications, including this portfolio and the patient registration interfaces of the COVID-19 management system.",
    related: ["CSS3", "JavaScript", "Responsive Design"]
  },
  css3: {
    name: "CSS3",
    category: "Web Technology",
    icon: "🎨",
    accent: "cyan",
    explanation: "Modern stylesheet language used for visual presentation, layout design (Flexbox/Grid), and smooth animations.",
    practicalUse: "Used to build responsive, mobile-first layouts, custom glassmorphism components, and themed user interfaces.",
    related: ["HTML5", "JavaScript", "Responsive Design"]
  },
  javascript: {
    name: "JavaScript",
    category: "Web Technology",
    icon: "⚡",
    accent: "amber",
    explanation: "A dynamic scripting language enabling interactive client-side behavior, DOM manipulation, and asynchronous operations.",
    practicalUse: "Used for interactive skill exploration, form validation, animated typing effects, and mobile navigation in this portfolio.",
    related: ["HTML5", "CSS3", "DOM API"]
  },
  ai_principles: {
    name: "AI Core Principles",
    category: "Artificial Intelligence",
    icon: "🤖",
    accent: "pink",
    explanation: "Foundational concepts of artificial intelligence, search algorithms, problem formulation, and intelligent agent design.",
    practicalUse: "Applied in conceptualizing the VivasAI Agriculture Assistant to deliver structured farming guidance and diagnostic workflows.",
    related: ["Machine Learning", "Python", "VivasAI"]
  },
  machine_learning: {
    name: "Machine Learning Fundamentals",
    category: "Artificial Intelligence & ML",
    icon: "🧠",
    accent: "pink",
    explanation: "Supervised and unsupervised learning paradigms, feature extraction, model evaluation, and predictive workflow design.",
    practicalUse: "Studied through Swordnex training and applied in building end-to-end regression pipelines on housing datasets.",
    related: ["Linear Regression", "Python", "Pandas", "NumPy"]
  },
  linear_regression: {
    name: "Linear Regression",
    category: "Machine Learning",
    icon: "📈",
    accent: "pink",
    explanation: "A fundamental supervised learning algorithm used to model linear relationships between input features and continuous numerical targets.",
    practicalUse: "Trained and evaluated in the House Price Prediction project to estimate residential prices based on square footage, rooms, and location.",
    related: ["Machine Learning", "Python", "NumPy", "Matplotlib"]
  },
  numpy: {
    name: "NumPy",
    category: "Data Analysis Library",
    icon: "🔢",
    accent: "emerald",
    explanation: "The fundamental Python library for numerical computation, offering powerful multi-dimensional arrays and matrix operations.",
    practicalUse: "Used to compute statistical metrics, perform vectorized mathematical operations, and prepare numerical arrays for ML models.",
    related: ["Python", "Pandas", "Matplotlib"]
  },
  pandas: {
    name: "Pandas",
    category: "Data Analysis Library",
    icon: "📊",
    accent: "emerald",
    explanation: "A Python library providing fast, flexible data structures (DataFrames) for tabular data cleaning, transformation, and analysis.",
    practicalUse: "Used to inspect housing dataset distributions, clean missing values, encode features, and prepare structured tables for training.",
    related: ["Python", "NumPy", "Matplotlib"]
  },
  matplotlib: {
    name: "Matplotlib",
    category: "Data Visualization",
    icon: "📉",
    accent: "emerald",
    explanation: "A comprehensive plotting library for producing static, animated, and interactive visualizations in Python.",
    practicalUse: "Used to generate scatter plots, correlation visualizations, and regression fit comparisons in Machine Learning projects.",
    related: ["Python", "Pandas", "NumPy"]
  },
  mysql: {
    name: "MySQL",
    category: "Databases",
    icon: "🗄️",
    accent: "blue",
    explanation: "An open-source relational database management system (RDBMS) utilizing SQL for structured data storage and queries.",
    practicalUse: "Designed schemas, relational tables, and CRUD queries for patient testing records in the COVID-19 Testing Management System.",
    related: ["PHP", "SQL Queries", "Relational Modeling"]
  },
  git_github: {
    name: "Git & GitHub",
    category: "Developer Tools",
    icon: "🐙",
    accent: "violet",
    explanation: "Distributed version control system (Git) and cloud repository platform (GitHub) for source tracking and project collaboration.",
    practicalUse: "Used to version control project codebases, maintain repository branches, and share open-source code artifacts.",
    related: ["VS Code", "Python", "Workflow"]
  },
  vscode: {
    name: "VS Code",
    category: "Developer Tools",
    icon: "💻",
    accent: "cyan",
    explanation: "A lightweight yet powerful source-code editor with built-in debugging, extensions, and integrated terminal support.",
    practicalUse: "My primary development environment for Python scripting, web layout engineering, and local project execution.",
    related: ["Git & GitHub", "Python", "Extensions"]
  }
};

/* ===================================================================
   3. DOM INITIALIZATION
   ===================================================================
*/
document.addEventListener("DOMContentLoaded", () => {
  initProfileLinks();
  initAnimatedHeroTitle();
  initInteractiveSkills();
  initNavigation();
  initResumeDownload();
  initContactForm();
  initDynamicYear();
});

/* ===================================================================
   4. PROFILE LINKS CONFIGURATION HELPER
   ===================================================================
   Wires up all LinkedIn and GitHub links from PORTFOLIO_CONFIG.
   If placeholder detected, alerts user with helpful instructions.
*/
function initProfileLinks() {
  const isPlaceholderUrl = (url) => {
    return !url || url.includes("YOUR-USERNAME") || url.includes("your-username");
  };

  const isPlaceholderEmail = (email) => {
    return !email || email.includes("your-email@example.com");
  };

  // Find all configured links
  document.querySelectorAll("[data-config-link]").forEach((el) => {
    const type = el.getAttribute("data-config-link");

    if (type === "linkedin") {
      el.setAttribute("href", PORTFOLIO_CONFIG.linkedinUrl);
      if (isPlaceholderUrl(PORTFOLIO_CONFIG.linkedinUrl)) {
        el.classList.add("is-placeholder-link");
        el.setAttribute("title", "LinkedIn Placeholder — Update your URL in script.js (PORTFOLIO_CONFIG)");
        el.addEventListener("click", (e) => {
          e.preventDefault();
          showNotification(
            "LinkedIn Placeholder",
            "Please update your real LinkedIn URL in <code>script.js</code> under <code>PORTFOLIO_CONFIG.linkedinUrl</code>."
          );
        });
      }
    } else if (type === "github") {
      el.setAttribute("href", PORTFOLIO_CONFIG.githubUrl);
      if (isPlaceholderUrl(PORTFOLIO_CONFIG.githubUrl)) {
        el.classList.add("is-placeholder-link");
        el.setAttribute("title", "GitHub Placeholder — Update your URL in script.js (PORTFOLIO_CONFIG)");
        el.addEventListener("click", (e) => {
          e.preventDefault();
          showNotification(
            "GitHub Placeholder",
            "Please update your real GitHub URL in <code>script.js</code> under <code>PORTFOLIO_CONFIG.githubUrl</code>."
          );
        });
      }
    } else if (type === "email") {
      el.setAttribute("href", `mailto:${PORTFOLIO_CONFIG.emailAddress}`);
      if (el.classList.contains("email-text-display")) {
        el.textContent = PORTFOLIO_CONFIG.emailAddress;
      }
    }
  });
}

/* ===================================================================
   5. ANIMATED HERO TITLE (Typing & Deleting Rotator)
   ===================================================================
   Rotates smoothly between titles without layout shifts.
   Respects prefers-reduced-motion.
*/
function initAnimatedHeroTitle() {
  const titleEl = document.getElementById("animatedTitle");
  if (!titleEl) return;

  const titles = [
    "Aspiring AI/ML Engineer",
    "Machine Learning Enthusiast",
    "Python Developer",
    "AI Project Developer",
    "Future AI Engineer"
  ];

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    titleEl.textContent = titles[0];
    return;
  }

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deletingSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function typeStep() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting) {
      // Typing forward
      charIndex++;
      titleEl.textContent = currentTitle.substring(0, charIndex);

      if (charIndex === currentTitle.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        setTimeout(typeStep, pauseEnd);
        return;
      }
      setTimeout(typeStep, typingSpeed);
    } else {
      // Deleting backwards
      charIndex--;
      titleEl.textContent = currentTitle.substring(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting, switch to next word
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeStep, pauseStart);
        return;
      }
      setTimeout(typeStep, deletingSpeed);
    }
  }

  // Start initial typing
  setTimeout(typeStep, 600);
}

/* ===================================================================
   6. INTERACTIVE SKILLS (Click to View Explanation Modal)
   ===================================================================
*/
function initInteractiveSkills() {
  const skillModal = document.getElementById("skillModal");
  const skillCloseBtn = document.getElementById("skillCloseBtn");
  const skillModalName = document.getElementById("skillModalName");
  const skillModalCategory = document.getElementById("skillModalCategory");
  const skillModalIcon = document.getElementById("skillModalIcon");
  const skillModalExplanation = document.getElementById("skillModalExplanation");
  const skillModalUse = document.getElementById("skillModalUse");
  const skillModalRelated = document.getElementById("skillModalRelated");

  let lastFocusedSkillElement = null;

  function openSkillDetail(skillKey, triggerElement) {
    const data = SKILLS_DATA[skillKey];
    if (!data || !skillModal) return;

    lastFocusedSkillElement = triggerElement;

    // Populate data
    if (skillModalName) skillModalName.textContent = data.name;
    if (skillModalCategory) skillModalCategory.textContent = data.category;
    if (skillModalIcon) skillModalIcon.textContent = data.icon;
    if (skillModalExplanation) skillModalExplanation.textContent = data.explanation;
    if (skillModalUse) skillModalUse.textContent = data.practicalUse;

    // Related skills pills
    if (skillModalRelated) {
      skillModalRelated.innerHTML = "";
      if (data.related && data.related.length > 0) {
        data.related.forEach((rel) => {
          const span = document.createElement("span");
          span.className = "related-tag";
          span.textContent = rel;
          skillModalRelated.appendChild(span);
        });
      }
    }

    skillModal.classList.add("open");
    skillModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (skillCloseBtn) skillCloseBtn.focus();
  }

  function closeSkillModal() {
    if (!skillModal) return;
    skillModal.classList.remove("open");
    skillModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedSkillElement) {
      lastFocusedSkillElement.focus();
    }
  }

  // Attach click & keyboard listeners to all interactive skill elements
  document.querySelectorAll("[data-skill]").forEach((el) => {
    const skillKey = el.getAttribute("data-skill");

    // Click handler
    el.addEventListener("click", () => openSkillDetail(skillKey, el));

    // Keyboard accessibility (Enter or Space)
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openSkillDetail(skillKey, el);
      }
    });
  });

  if (skillCloseBtn) skillCloseBtn.addEventListener("click", closeSkillModal);

  // Close when clicking modal backdrop
  if (skillModal) {
    skillModal.addEventListener("click", (e) => {
      if (e.target === skillModal) {
        closeSkillModal();
      }
    });
  }

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && skillModal && skillModal.classList.contains("open")) {
      closeSkillModal();
    }
  });
}

/* ===================================================================
   7. NAVIGATION & SCROLL SPY
   ===================================================================
*/
function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll Spy with IntersectionObserver
  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          navItems.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
  }
}

/* ===================================================================
   8. RESUME DOWNLOAD HANDLER & MODAL
   ===================================================================
*/
function initResumeDownload() {
  const resumeButtons = document.querySelectorAll(".resume-btn");
  const resumeModal = document.getElementById("resumeModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalOkBtn = document.getElementById("modalOkBtn");

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add("open");
      resumeModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (modalOkBtn) modalOkBtn.focus();
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove("open");
      resumeModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  async function handleResumeDownload(e) {
    e.preventDefault();

    try {
      const response = await fetch(PORTFOLIO_CONFIG.resumeFileName, { method: "HEAD" });

      if (response.ok) {
        // PDF exists, initiate clean download
        const downloadLink = document.createElement("a");
        downloadLink.href = PORTFOLIO_CONFIG.resumeFileName;
        downloadLink.download = PORTFOLIO_CONFIG.resumeFileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        openResumeModal();
      }
    } catch (err) {
      openResumeModal();
    }
  }

  resumeButtons.forEach((btn) => btn.addEventListener("click", handleResumeDownload));
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeResumeModal);
  if (modalOkBtn) modalOkBtn.addEventListener("click", closeResumeModal);

  if (resumeModal) {
    resumeModal.addEventListener("click", (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && resumeModal && resumeModal.classList.contains("open")) {
      closeResumeModal();
    }
  });
}

/* ===================================================================
   9. CONTACT FORM VALIDATION & DIRECT EMAIL HELPER
   ===================================================================
*/
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const subjectInput = document.getElementById("userSubject");
  const messageInput = document.getElementById("userMessage");
  const formStatus = document.getElementById("formStatus");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim());
  }

  function setFieldError(field, hasError) {
    const group = field.closest(".form-group");
    if (!group) return;
    if (hasError) {
      group.classList.add("has-error");
    } else {
      group.classList.remove("has-error");
    }
  }

  if (contactForm) {
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener("input", () => {
          const group = input.closest(".form-group");
          if (group && group.classList.contains("has-error")) {
            group.classList.remove("has-error");
          }
        });
      }
    });

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;

      if (!nameInput.value.trim()) {
        setFieldError(nameInput, true);
        isValid = false;
      } else {
        setFieldError(nameInput, false);
      }

      if (!validateEmail(emailInput.value)) {
        setFieldError(emailInput, true);
        isValid = false;
      } else {
        setFieldError(emailInput, false);
      }

      if (!subjectInput.value.trim()) {
        setFieldError(subjectInput, true);
        isValid = false;
      } else {
        setFieldError(subjectInput, false);
      }

      if (messageInput.value.trim().length < 10) {
        setFieldError(messageInput, true);
        isValid = false;
      } else {
        setFieldError(messageInput, false);
      }

      if (!isValid) {
        if (formStatus) {
          formStatus.className = "form-status notice warning";
          formStatus.innerHTML = "⚠️ Please fill in all required fields properly.";
        }
        return;
      }

      const subject = encodeURIComponent(subjectInput.value.trim());
      const message = encodeURIComponent(
        `Hi Santhiya,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      if (formStatus) {
        formStatus.className = "form-status notice success";
        formStatus.innerHTML = `
          <strong>✓ Message Prepared!</strong><br />
          Thank you, <strong>${nameInput.value.trim()}</strong>.<br /><br />
          <em>Publishing Note:</em> To send directly from the website without opening your email app, connect this form to Formspree, EmailJS, or your backend.<br /><br />
          You can dispatch this message directly via your email client now:
          <div style="margin-top: 12px;">
            <a href="mailto:${PORTFOLIO_CONFIG.emailAddress}?subject=${subject}&body=${message}" class="button primary" style="padding: 9px 18px; font-size: 0.86rem; text-decoration: none;">
              Open in Email App ✉
            </a>
          </div>
        `;
      }
    });
  }
}

/* ===================================================================
   10. GENERIC NOTIFICATION MODAL / TOAST
   ===================================================================
*/
function showNotification(title, messageHtml) {
  const modal = document.getElementById("genericNoticeModal");
  const titleEl = document.getElementById("genericNoticeTitle");
  const bodyEl = document.getElementById("genericNoticeBody");
  const okBtn = document.getElementById("genericNoticeOkBtn");

  if (!modal || !titleEl || !bodyEl) {
    alert(`${title}\n\n${messageHtml.replace(/<[^>]*>/g, "")}`);
    return;
  }

  titleEl.textContent = title;
  bodyEl.innerHTML = messageHtml;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (okBtn) {
    okBtn.onclick = closeModal;
    okBtn.focus();
  }

  const closeBtn = document.getElementById("genericNoticeCloseBtn");
  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
}

/* ===================================================================
   11. DYNAMIC FOOTER YEAR
   ===================================================================
*/
function initDynamicYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
