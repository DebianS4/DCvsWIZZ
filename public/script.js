const body = document.body;

function triggerShake() {
  body.classList.remove('shake');
  void body.offsetWidth;
  body.classList.add('shake');
  window.setTimeout(() => body.classList.remove('shake'), 280);
}

document.querySelectorAll('[data-shake]').forEach((element) => {
  element.addEventListener('click', triggerShake);
});

const chips = [...document.querySelectorAll('[data-fighter]')];
const panels = [...document.querySelectorAll('[data-fighter-panel]')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const fighter = chip.dataset.fighter;
    chips.forEach((item) => item.classList.toggle('active', item === chip));
    panels.forEach((panel) => {
      panel.classList.toggle('focus', panel.dataset.fighter === fighter);
    });
    triggerShake();
  });
});

const rail = document.querySelector('[data-gallery-rail]');
document.querySelectorAll('[data-gallery]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!rail) return;
    const distance = Math.min(rail.clientWidth * 0.82, 460);
    rail.scrollBy({ left: button.dataset.gallery === 'next' ? distance : -distance, behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.fighter-panel,.gallery-card,.cabinet').forEach((element) => observer.observe(element));

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement?.matches('.btn')) triggerShake();
});
