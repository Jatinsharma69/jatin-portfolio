document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".section, .project-card, .work-header");
  els.forEach(el => el.classList.add("reveal"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  els.forEach(el => observer.observe(el));

  // Subtle cursor tilt on larger screens.
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      if (window.innerWidth < 900) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -1.2}deg) rotateY(${x * 1.2}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });
});
