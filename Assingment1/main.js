// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}, for reaching out! I'll get back to you soon.`);
  this.reset();
});
