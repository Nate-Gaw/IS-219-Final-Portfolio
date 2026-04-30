async function loadComponent(targetSelector, componentPath) {
  const targetElement = document.querySelector(targetSelector);

  if (!targetElement) {
    return;
  }

  try {
    const response = await fetch(componentPath, { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error(`Failed to load ${componentPath}`);
    }

    targetElement.innerHTML = await response.text();
    return;
  } catch (error) {
    if (componentPath.includes('navbar')) {
      targetElement.innerHTML = `
        <header class="navbar-shell" aria-label="Global navigation">
          <a class="navbar-brand" data-page="home" href="#" aria-label="Nathanael Gaw home">
            <span class="navbar-mark">NG</span>
            <span class="navbar-name">Nathanael Gaw</span>
          </a>
          <nav class="navbar-links" aria-label="Primary">
            <a class="navbar-link" data-page="home" href="#">Home</a>
            <a class="navbar-link" data-page="projects" href="#">Projects</a>
            <a class="navbar-link" data-page="resume" href="#">Resume</a>
            <a class="navbar-link navbar-link-cta" data-page="contact" href="#">Contact</a>
          </nav>
        </header>
      `;
      return;
    }

    if (componentPath.includes('footer')) {
      targetElement.innerHTML = `
        <div class="footer-shell">
          <div class="footer-grid" aria-hidden="true">
            <div class="placeholder"></div>
            <div class="placeholder"></div>
          </div>
        </div>
      `;
    }
  }
}

function getSiteBasePath() {
  return window.location.pathname.includes('/pages/') ? '..' : '.';
}

function setHeaderLinks() {
  const headerElement = document.querySelector('#site-header');

  if (!headerElement) {
    return;
  }

  const basePath = getSiteBasePath();
  const linkMap = {
    home: `${basePath}/index.html`,
    projects: `${basePath}/pages/projects.html`,
    resume: `${basePath}/pages/resume.html`,
    contact: `${basePath}/pages/contact.html`,
  };

  Object.entries(linkMap).forEach(([pageKey, href]) => {
    headerElement.querySelectorAll(`[data-page="${pageKey}"]`).forEach((linkElement) => {
      linkElement.setAttribute('href', href);
    });
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const activePageKey = currentPath === 'index.html' ? 'home' : currentPath.replace('.html', '');

  headerElement.querySelectorAll('.navbar-links [data-page]').forEach((linkElement) => {
    if (linkElement.getAttribute('data-page') === activePageKey) {
      linkElement.setAttribute('aria-current', 'page');
    } else {
      linkElement.removeAttribute('aria-current');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const basePath = getSiteBasePath();

  loadComponent('#site-header', `${basePath}/components/navbar.html`).then(setHeaderLinks);
});