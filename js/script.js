const articleSources = [
  { label: 'Article principal', path: 'articles/article.md.md' },
  { label: 'IA et éducation', path: 'articles/X - Réflexions/Intelligence artificielle et éducation.md' },
  { label: 'Émergence des écarts filles-garçons en mathématiques', path: 'articles/X - Réflexions/Rapid emergence of a maths gender gap in first gra.md' },
  { label: 'Mal-être à l’école', path: 'articles/X - Réflexions/Mal-être à l_école.md' },
  { label: 'Se présenter (anglais)', path: 'articles/X - Personnel/X - Fiche anglais/Se présenter.md' },
  { label: 'Théâtre (AEFE)', path: 'articles/X - Personnel/X - AEFE/Pédagogie/Théatre.md' }
];

function formatTodayDate() {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date());
}

function setNextSteps() {
  const steps = [
    'Identifier une pratique pédagogique à améliorer cette semaine.',
    'Lire un article du site et noter 3 idées actionnables.',
    'Partager une proposition concrète avec un collègue.'
  ];

  const container = document.getElementById('next-steps');
  if (!container) {
    return;
  }

  container.innerHTML = '';
  steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    container.appendChild(li);
  });
}

async function loadHeader() {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) {
    return;
  }

  try {
    const response = await fetch('header.html');
    placeholder.innerHTML = await response.text();
  } catch (error) {
    placeholder.innerHTML = '<p>Impossible de charger l’en-tête.</p>';
  }
}

async function loadMarkdownArticle(path) {
  const container = document.getElementById('article-md');
  if (!container) {
    return;
  }

  try {
    container.innerHTML = '<p>Chargement de l’article…</p>';
    const response = await fetch(path);
    const markdown = await response.text();
    container.innerHTML = marked.parse(markdown);
  } catch (error) {
    container.innerHTML = '<p>Impossible de charger l’article.</p>';
  }
}

function setupArticleSelector() {
  const select = document.getElementById('article-select');
  if (!select) {
    return;
  }

  select.innerHTML = '';
  articleSources.forEach((article) => {
    const option = document.createElement('option');
    option.value = article.path;
    option.textContent = article.label;
    select.appendChild(option);
  });

  select.addEventListener('change', (event) => {
    loadMarkdownArticle(event.target.value);
  });

  if (articleSources.length > 0) {
    loadMarkdownArticle(articleSources[0].path);
  }
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) {
    return;
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darkModeOn = document.body.classList.contains('dark-mode');
    btn.textContent = darkModeOn ? '☀️ Mode clair' : '🌙 Mode sombre';
  });
}

function setCurrentDate() {
  const node = document.getElementById('current-date');
  if (node) {
    node.textContent = formatTodayDate();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadHeader();
  setCurrentDate();
  setNextSteps();
  setupArticleSelector();
  setupThemeToggle();
});
