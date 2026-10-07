// ══════════════════════════════════════════════════════════════════════════
// GreenNext Technologies — Accessible FAQ Accordion Controller
// ══════════════════════════════════════════════════════════════════════════

export function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;

      // Close other items if desired
      faqQuestions.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.style.maxHeight = null;
            otherBtn.nextElementSibling.classList.remove('open');
          }
        }
      });

      btn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      if (!isExpanded) {
        answer.classList.add('open');
        answer.style.maxHeight = `${answer.scrollHeight + 32}px`;
      } else {
        answer.classList.remove('open');
        answer.style.maxHeight = null;
      }
    });
  });
}
