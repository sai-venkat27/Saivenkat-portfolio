// Theme toggle
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('light');
};

// Mobile menu toggle
document.getElementById('hamburger').onclick = () => {
  document.getElementById('nav').classList.toggle('open');
};

// Accordion for Education
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

// Contact form validation + clear
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Message sent successfully!");
    e.target.reset();
  };

  document.getElementById('clearForm').onclick = () => {
    contactForm.reset();
  };
}

// ScrollReveal animations
if (window.ScrollReveal) {
  ScrollReveal().reveal('section', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    reset: false
  });

  ScrollReveal().reveal('.project-card', {
    interval: 200,
    scale: 0.95
  });

  ScrollReveal().reveal('.skill', {
    interval: 150,
    origin: 'left'
  });

  ScrollReveal().reveal('.cert', {
    interval: 150,
    origin: 'right'
  });
}

// Lucide icons render
if (window.lucide) {
  lucide.createIcons();
}
