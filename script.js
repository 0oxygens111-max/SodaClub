const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
// Smooth scroll untuk semua link navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // cegah default jump
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 70; // tinggi navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const targetPosition = targetRect - bodyRect - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

