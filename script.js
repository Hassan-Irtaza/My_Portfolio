/* ============================================================
   script.js — Portfolio interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     CAROUSEL
  ---------------------------------------------------------- */
  const slides    = Array.from(document.querySelectorAll('.project-slide'));
  const prevBtn   = document.getElementById('prevBtn');
  const nextBtn   = document.getElementById('nextBtn');
  let current     = 0;
  let visibleSlides = slides; // updated by filter

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    if (visibleSlides.length === 0) return;

    // Clamp index within visible slides
    current = ((index % visibleSlides.length) + visibleSlides.length) % visibleSlides.length;
    visibleSlides[current].classList.add('active');
  }

  prevBtn?.addEventListener('click', () => showSlide(current - 1));
  nextBtn?.addEventListener('click', () => showSlide(current + 1));

  /* Keyboard navigation */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  showSlide(current - 1);
    if (e.key === 'ArrowRight') showSlide(current + 1);
  });

  /* ----------------------------------------------------------
     CATEGORY FILTER PILLS
  ---------------------------------------------------------- */
  const pills = document.querySelectorAll('.pill');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active pill
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;

      // Show / hide slides
      slides.forEach(slide => {
        const cat = slide.dataset.category;
        const visible = filter === 'all' || cat === filter;
        slide.style.display = visible ? '' : 'none';
      });

      // Rebuild visible list and reset to first
      visibleSlides = slides.filter(s => s.style.display !== 'none');
      current = -1; // will be incremented to 0 in showSlide
      showSlide(0);
    });
  });

  /* ----------------------------------------------------------
     INITIAL STATE
  ---------------------------------------------------------- */
  showSlide(0);

});
