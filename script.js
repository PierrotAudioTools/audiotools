const tools = [
  {
    name: "Outil 01",
    category: "Utilitaire audio",
    access: "Téléchargement direct",
    status: "Disponible",
    description:
      "Présentation générique d'un outil audio disponible en téléchargement direct.",
    formats: ["macOS", "ZIP"],
    primaryLabel: "Accéder",
    primaryUrl: "https://github.com/PierrotAudioTools/audiotools/releases",
    secondaryLabel: "Détails",
    secondaryUrl: "https://github.com/PierrotAudioTools/audiotools/releases",
    note: "Tu pourras remplacer ce contenu par un vrai projet ou un vrai lien."
  },
  {
    name: "Outil 02",
    category: "Projet GitHub",
    access: "Repo GitHub",
    status: "Disponible",
    description:
      "Présentation générique d'un projet audio ou technique accessible depuis GitHub.",
    formats: ["GitHub", "Source"],
    primaryLabel: "Accéder",
    primaryUrl: "https://github.com/PierrotAudioTools/audiotools",
    secondaryLabel: "Détails",
    secondaryUrl: "https://github.com/PierrotAudioTools/audiotools",
    note: "Cette carte peut servir de raccourci vers un autre dépôt."
  },
  {
    name: "Outil 03",
    category: "Téléchargement",
    access: "Téléchargement direct",
    status: "Disponible",
    description:
      "Présentation générique d'un build, d'une archive ou d'un package prêt à récupérer.",
    formats: ["Windows", "macOS", "Download"],
    primaryLabel: "Accéder",
    primaryUrl: "https://github.com/PierrotAudioTools/audiotools/releases",
    secondaryLabel: "Détails",
    secondaryUrl: "https://github.com/PierrotAudioTools/audiotools/releases",
    note: "Le lien principal peut pointer vers un fichier direct ou une page de release."
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
    <div class="tool-meta" aria-label="Informations">${metaItems}</div>
    <div class="tool-access-row">
      <span class="tool-access">${tool.access}</span>
    </div>
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
