const scrollyApp = document.querySelector('#scrolly-app');
const stickyLayer = document.querySelector('#sticky-layer');
const scrollContainer = document.querySelector('#scroll-container');
const contentUrl = scrollyApp ? scrollyApp.dataset.contentUrl : '';

const stepMap = new Map();

function createElement(tagName, classNames = [], textContent = '') {
  const element = document.createElement(tagName);
  classNames.forEach((className) => element.classList.add(className));

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createDetailList(details) {
  const listElement = createElement('ul', ['step-list']);

  details.forEach((detail) => {
    const itemElement = createElement('li', ['step-list-item'], detail);
    listElement.appendChild(itemElement);
  });

  return listElement;
}

function createCard(step) {
  const cardElement = createElement('article', ['step-card', `step-card-${step.type}`]);
  const headerElement = createElement('div', ['step-card-header']);

  if (step.subtitle) {
    headerElement.appendChild(createElement('p', ['step-kicker'], step.subtitle));
  }

  if (step.title) {
    headerElement.appendChild(createElement('h2', ['step-title'], step.title));
  }

  if (step.support) {
    headerElement.appendChild(createElement('p', ['step-support'], step.support));
  }

  cardElement.appendChild(headerElement);

  if (Array.isArray(step.items) && step.items.length > 0) {
    const gridElement = createElement('div', ['step-grid']);

    step.items.forEach((item) => {
      const itemCard = createElement('section', ['step-item']);
      itemCard.appendChild(createElement('h3', ['step-item-title'], item.title));

      if (Array.isArray(item.details) && item.details.length > 0) {
        itemCard.appendChild(createDetailList(item.details));
      }

      gridElement.appendChild(itemCard);
    });

    cardElement.appendChild(gridElement);
  }

  if (step.diagram) {
    const diagramElement = createElement('div', ['step-diagram']);
    diagramElement.appendChild(createElement('div', ['step-diagram-label'], step.diagram));
    cardElement.appendChild(diagramElement);
  }

  return cardElement;
}

function renderStickyLayer() {
  if (!stickyLayer) {
    return;
  }

  stickyLayer.innerHTML = '';

  const shellElement = createElement('div', ['sticky-shell']);
  const frameElement = createElement('div', ['sticky-frame']);
  const placeholderElement = createElement('div', ['sticky-placeholder']);
  const labelElement = createElement('div', ['sticky-placeholder-label'], 'VISUAL SYSTEM PLACEHOLDER');
  const stateElement = createElement('div', ['sticky-placeholder-state'], 'STEP 00');

  placeholderElement.appendChild(labelElement);
  placeholderElement.appendChild(stateElement);
  frameElement.appendChild(placeholderElement);
  shellElement.appendChild(frameElement);
  stickyLayer.appendChild(shellElement);
}

function renderStep(step) {
  const stepElement = createElement('section', ['step', `step-type-${step.type}`]);
  stepElement.dataset.stepId = String(step.id);
  stepElement.dataset.stepType = step.type;

  stepElement.appendChild(createCard(step));
  stepMap.set(step.id, step);

  return stepElement;
}

function renderAllSteps(content) {
  if (!scrollContainer) {
    return;
  }

  scrollContainer.innerHTML = '';
  stepMap.clear();

  content.steps.forEach((step) => {
    scrollContainer.appendChild(renderStep(step));
  });
}

function updateStickyLayer(stepId) {
  if (!stickyLayer) {
    return;
  }

  const stickyStateElement = stickyLayer.querySelector('.sticky-placeholder-state');
  const currentStep = stepMap.get(stepId);

  stickyLayer.dataset.visualState = String(stepId);
  stickyLayer.dataset.visualType = currentStep ? currentStep.type : 'unknown';

  if (stickyStateElement) {
    stickyStateElement.textContent = `STEP ${String(stepId).padStart(2, '0')}`;
  }
}

function updateActiveStep(stepId) {
  document.querySelectorAll('.step').forEach((stepElement) => {
    const isActive = Number(stepElement.dataset.stepId) === stepId;
    stepElement.classList.toggle('is-active', isActive);
  });
}

async function bootstrapRenderer() {
  if (!contentUrl) {
    return;
  }

  const response = await fetch(contentUrl, { cache: 'no-cache' });
  const content = await response.json();

  renderStickyLayer();
  renderAllSteps(content);
  updateStickyLayer(0);
  updateActiveStep(0);

  document.dispatchEvent(new CustomEvent('scrolly:content-rendered', {
    detail: {
      stepCount: content.steps.length,
    },
  }));

  document.addEventListener('activeStepChanged', (event) => {
    updateStickyLayer(event.detail.stepId);
    updateActiveStep(event.detail.stepId);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapRenderer().catch(() => {
    renderStickyLayer();
  });
});