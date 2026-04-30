let activeStep = null;
let initialized = false;
let observer = null;

function emitActiveStep(stepId) {
  if (activeStep === stepId) {
    return;
  }

  activeStep = stepId;
  document.dispatchEvent(new CustomEvent('activeStepChanged', {
    detail: {
      stepId,
    },
  }));
}

function initializeObserver() {
  if (initialized) {
    return;
  }

  const steps = document.querySelectorAll('.step');

  if (steps.length === 0) {
    return;
  }

  initialized = true;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const stepId = Number(entry.target.dataset.stepId);
        emitActiveStep(stepId);
      });
    },
    {
      root: null,
      threshold: 0.6,
    }
  );

  steps.forEach((stepElement) => observer.observe(stepElement));

  if (activeStep === null && steps.length > 0) {
    emitActiveStep(Number(steps[0].dataset.stepId));
  }
}

function bootstrapScrollEngine() {
  initializeObserver();

  if (!initialized) {
    document.addEventListener('scrolly:content-rendered', initializeObserver, { once: true });
  }
}

document.addEventListener('DOMContentLoaded', bootstrapScrollEngine);