const tools = [
  {
    name: "Batch Renamer",
    category: "Productivité",
    status: "Disponible",
    description:
      "Renomme rapidement des lots de fichiers avec des règles simples et un aperçu avant validation.",
    formats: ["macOS", "ZIP", "Version 1.2"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/",
    secondaryLabel: "Voir le repo",
    secondaryUrl: "https://github.com/",
    note: "Idéal pour nettoyer des exports, assets ou lots de documents."
  },
  {
    name: "Markdown Cleaner",
    category: "Édition",
    status: "Disponible",
    description:
      "Nettoie, reformate et homogénéise des fichiers Markdown pour garder une doc plus propre et plus lisible.",
    formats: ["Cross-platform", "CLI", "Open Source"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/",
    secondaryLabel: "Documentation",
    secondaryUrl: "https://github.com/",
    note: "Pratique pour standardiser rapidement de gros ensembles de notes ou docs."
  },
  {
    name: "Asset Packager",
    category: "Build",
    status: "Disponible",
    description:
      "Assemble et prépare des fichiers de livraison dans une structure claire, prête à partager ou publier.",
    formats: ["Windows", "macOS", "ZIP"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/",
    secondaryLabel: "Release notes",
    secondaryUrl: "https://github.com/",
    note: "Utile pour distribuer des packs, exports et livrables techniques."
  }
];

const toolsGrid = document.getElementById("tools-grid");
const toolCount = document.getElementById("tool-count");

function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";

  const metaItems = tool.formats
    .map((item) => `<span>${item}</span>`)
    .join("");

  card.innerHTML = `
    <div class="tool-topline">
      <span class="tool-tag">${tool.category}</span>
      <span class="tool-status">${tool.status}</span>
    </div>
    <div>
      <h3>${tool.name}</h3>
    </div>
    <p class="tool-description">${tool.description}</p>
    <div class="tool-meta" aria-label="Formats et disponibilité">${metaItems}</div>
    <div class="tool-links">
      <a class="primary-link" href="${tool.primaryUrl}" target="_blank" rel="noreferrer">${tool.primaryLabel}</a>
      <a class="secondary-link" href="${tool.secondaryUrl}" target="_blank" rel="noreferrer">${tool.secondaryLabel}</a>
    </div>
    <p class="tool-note">${tool.note}</p>
  `;

  return card;
}

function renderTools() {
  if (!toolsGrid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  tools.forEach((tool) => {
    fragment.appendChild(createToolCard(tool));
  });

  toolsGrid.appendChild(fragment);

  if (toolCount) {
    toolCount.textContent = String(tools.length).padStart(2, "0");
  }
}

renderTools();
