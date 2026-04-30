let currentStep = 0;

function updateVisualState(stepIndex) {
  const stickyVisual = document.querySelector('#sticky-visual');
  const steps = document.querySelectorAll('.step');

  if (!stickyVisual) {
    return;
  }

  currentStep = stepIndex;
  stickyVisual.setAttribute('data-visual-state', String(stepIndex));

  steps.forEach((stepElement) => {
    const stepIndexValue = Number(stepElement.getAttribute('data-step-index'));
    stepElement.classList.toggle('is-active', stepIndexValue === stepIndex);
  });
}

function detectActiveStep() {
  const steps = Array.from(document.querySelectorAll('.step'));

  if (steps.length === 0) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  let nextStep = currentStep;

  steps.forEach((stepElement) => {
    const rect = stepElement.getBoundingClientRect();
    const isCentered = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

    if (isCentered) {
      nextStep = Number(stepElement.getAttribute('data-step-index'));
    }
  });

  if (nextStep !== currentStep) {
    updateVisualState(nextStep);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');

  updateVisualState(0);

  if (steps.length === 0) {
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateVisualState(Number(entry.target.getAttribute('data-step-index')));
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    steps.forEach((stepElement) => observer.observe(stepElement));
  } else {
    window.addEventListener('scroll', detectActiveStep, { passive: true });
    detectActiveStep();
  }
});