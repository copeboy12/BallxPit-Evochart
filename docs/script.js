const categories = [
  { id: "all", name: "All" },
  { id: "core", name: "Core Balls" },
  { id: "status", name: "Status" },
  { id: "area", name: "Area" },
  { id: "passive", name: "Passive Evolutions" },
  { id: "advanced", name: "Advanced" }
];

const balls = [
  { id: "burn", name: "Burn", image: "assets/icons/ballxpit/burn.png" },
  { id: "freeze", name: "Freeze", image: "assets/icons/ballxpit/freeze.png" },
  { id: "poison", name: "Poison", image: "assets/icons/ballxpit/poison.png" },
  { id: "bleed", name: "Bleed", image: "assets/icons/ballxpit/bleed.png" },
  { id: "lightning", name: "Lightning", image: "assets/icons/ballxpit/lightning.png" },
  { id: "wind", name: "Wind", image: "assets/icons/ballxpit/wind.png" },
  { id: "laserH", name: "Laser H", image: "assets/icons/ballxpit/laser-h.png" },
  { id: "laserV", name: "Laser V", image: "assets/icons/ballxpit/laser-v.png" },
  { id: "iron", name: "Iron", image: "assets/icons/ballxpit/iron.png" },
  { id: "dark", name: "Dark", image: "assets/icons/ballxpit/dark.png" },
  { id: "vampiric", name: "Vampiric Sword", image: "assets/icons/ballxpit/vampiric-sword.png" },
  { id: "blackHole", name: "Black Hole", image: "assets/icons/ballxpit/black-hole.png" },
  { id: "nuclear", name: "Nuclear Bomb", image: "assets/icons/ballxpit/nuclear-bomb.png" },
  { id: "satan", name: "Satan", image: "assets/icons/ballxpit/satan.png" },
  { id: "nosferatu", name: "Nosferatu", image: "assets/icons/ballxpit/nosferatu.png" }
];

const passives = [
  { id: "bandage", name: "Bandage", image: "assets/icons/ballxpit/bandage.png" },
  { id: "cloak", name: "Ethereal Cloak", image: "assets/icons/ballxpit/ethereal-cloak.png" },
  { id: "hatchet", name: "Upturned Hatchet", image: "assets/icons/ballxpit/upturned-hatchet.png" },
  { id: "magnet", name: "Magnet", image: "assets/icons/ballxpit/magnet.png" },
  { id: "crown", name: "Crown", image: "assets/icons/ballxpit/crown.png" },
  { id: "shoes", name: "Swift Shoes", image: "assets/icons/ballxpit/swift-shoes.png" },
  { id: "glove", name: "Power Glove", image: "assets/icons/ballxpit/power-glove.png" },
  { id: "orb", name: "Echo Orb", image: "assets/icons/ballxpit/echo-orb.png" }
];

const recipes = [
  { category: "status", inputs: ["wind", "freeze"], result: "Blizzard", image: "assets/icons/ballxpit/blizzard.png", tags: ["freeze", "wide control"], note: "SteelSeries specifically calls out Wind or Lightning with Freeze as Blizzard-style control." },
  { category: "status", inputs: ["lightning", "freeze"], result: "Blizzard", image: "assets/icons/ballxpit/blizzard.png", tags: ["freeze", "chain hits"], note: "A shock-heavy route into freezing crowd control." },
  { category: "status", inputs: ["burn", "laserH"], result: "Heat Ray", image: "assets/icons/ballxpit/heat-ray.png", tags: ["burn", "beam"], note: "Inspired by the guide example: burn enemies with a laser beam." },
  { category: "status", inputs: ["burn", "laserV"], result: "Solar Column", image: "assets/icons/ballxpit/solar-column.png", tags: ["burn", "vertical"], note: "A vertical beam version for lane pressure." },
  { category: "status", inputs: ["poison", "wind"], result: "Toxic Cyclone", image: "assets/icons/ballxpit/toxic-cyclone.png", tags: ["poison", "area"], note: "Spreads damage-over-time across drifting paths." },
  { category: "status", inputs: ["bleed", "iron"], result: "Shrapnel", image: "assets/icons/ballxpit/shrapnel.png", tags: ["bleed", "burst"], note: "A heavier physical route for burst damage." },
  { category: "area", inputs: ["lightning", "dark"], result: "Dark Storm", image: "assets/icons/ballxpit/dark-storm.png", tags: ["aoe", "burst"], note: "The guide recommends pairing single-target Dark with AOE like Lightning." },
  { category: "area", inputs: ["iron", "dark"], result: "Gravity Hammer", image: "assets/icons/ballxpit/gravity-hammer.png", tags: ["hard hit", "elite damage"], note: "Hard-hitting balls for tankier enemies." },
  { category: "area", inputs: ["blackHole", "nuclear"], result: "Event Horizon", image: "assets/icons/ballxpit/event-horizon.png", tags: ["advanced", "screen clear"], note: "A late-run centerpiece evolution." },
  { category: "advanced", inputs: ["nosferatu", "vampiric"], result: "Blood Moon", image: "assets/icons/ballxpit/blood-moon.png", tags: ["healing", "advanced"], note: "A sustain-focused build path." },
  { category: "advanced", inputs: ["satan", "burn"], result: "Infernal Core", image: "assets/icons/ballxpit/infernal-core.png", tags: ["fire", "advanced"], note: "High-risk fire scaling." },
  { category: "passive", inputs: ["vampiric", "bandage"], result: "Hemomancer", image: "assets/icons/ballxpit/hemomancer.png", tags: ["healing", "baby balls"], note: "SteelSeries mentions Vampiric Sword and Bandage as a strong healing interaction." },
  { category: "passive", inputs: ["laserH", "cloak"], result: "Piercing Beam", image: "assets/icons/ballxpit/piercing-beam.png", tags: ["pierce", "beam"], note: "Cloak lets balls pass through enemies; plan around back-wall traps." },
  { category: "passive", inputs: ["iron", "hatchet"], result: "Backwall Breaker", image: "assets/icons/ballxpit/backwall-breaker.png", tags: ["back wall", "damage"], note: "Upturned Hatchet rewards balls after they reach the back wall." },
  { category: "passive", inputs: ["blackHole", "magnet"], result: "Singularity Pull", image: "assets/icons/ballxpit/singularity-pull.png", tags: ["vacuum", "control"], note: "Pull and containment build." },
  { category: "passive", inputs: ["lightning", "orb"], result: "Chain Echo", image: "assets/icons/ballxpit/chain-echo.png", tags: ["chain", "repeat"], note: "Extra repeated-hit utility." },
  { category: "core", inputs: ["burn", "poison"], result: "Caustic Flame", image: "assets/icons/ballxpit/caustic-flame.png", tags: ["dot", "hybrid"], note: "Stacks damage-over-time pressure." },
  { category: "core", inputs: ["freeze", "iron"], result: "Permafrost", image: "assets/icons/ballxpit/permafrost.png", tags: ["control", "impact"], note: "Control plus heavy collision." },
  { category: "core", inputs: ["wind", "laserV"], result: "Gale Lance", image: "assets/icons/ballxpit/gale-lance.png", tags: ["lane", "push"], note: "Clean vertical lane control." },
  { category: "core", inputs: ["bleed", "dark"], result: "Rupture Void", image: "assets/icons/ballxpit/rupture-void.png", tags: ["single target", "bleed"], note: "A focused damage route." }
];

const state = {
  category: "all",
  selectedBalls: new Set(),
  selectedPassives: new Set(),
  query: "",
  sorted: false,
  pinned: null
};

const byId = new Map([...balls, ...passives].map((item) => [item.id, item]));
const tabs = document.querySelector("#categoryTabs");
const ballGrid = document.querySelector("#ballGrid");
const passiveGrid = document.querySelector("#passiveGrid");
const recipeGrid = document.querySelector("#recipeGrid");
const searchInput = document.querySelector("#searchInput");
const matchCount = document.querySelector("#matchCount");
const activeHint = document.querySelector("#activeHint");
const ballCount = document.querySelector("#ballCount");
const passiveCount = document.querySelector("#passiveCount");
const detailPanel = document.querySelector("#detailPanel");
const sortButton = document.querySelector("#sortButton");

function initials(name) {
  return name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function icon(item, className = "ball-icon") {
  if (item.image) {
    return `<img class="${className}" src="${item.image}" alt="">`;
  }
  return `<span class="${className}">${initials(item.name)}</span>`;
}

function renderTabs() {
  tabs.innerHTML = categories.map((category) => `
    <button class="tab ${state.category === category.id ? "active" : ""}" data-category="${category.id}" type="button">${category.name}</button>
  `).join("");
}

function renderChips() {
  ballGrid.innerHTML = balls.map((ball) => `
    <button class="chip ${state.selectedBalls.has(ball.id) ? "selected" : ""}" data-ball="${ball.id}" type="button">
      ${icon(ball)}<span>${ball.name}</span>
    </button>
  `).join("");

  passiveGrid.innerHTML = passives.map((passive) => `
    <button class="chip ${state.selectedPassives.has(passive.id) ? "selected" : ""}" data-passive="${passive.id}" type="button">
      ${icon(passive, "passive-icon")}<span>${passive.name}</span>
    </button>
  `).join("");

  ballCount.textContent = `${state.selectedBalls.size} selected`;
  passiveCount.textContent = `${state.selectedPassives.size} selected`;
  const selectedNames = [...state.selectedBalls, ...state.selectedPassives].map((id) => byId.get(id).name);
  activeHint.textContent = selectedNames.length ? selectedNames.join(", ") : "Pick balls or passives to highlight matching evolutions.";
}

function recipeMatches(recipe) {
  const query = state.query.trim().toLowerCase();
  const categoryMatch = state.category === "all" || recipe.category === state.category;
  const searchText = [
    recipe.result,
    recipe.note,
    ...recipe.tags,
    ...recipe.inputs.map((id) => byId.get(id)?.name || id)
  ].join(" ").toLowerCase();
  return categoryMatch && (!query || searchText.includes(query));
}

function recipeHighlighted(recipe) {
  const selected = new Set([...state.selectedBalls, ...state.selectedPassives]);
  if (!selected.size) return false;
  return recipe.inputs.some((id) => selected.has(id));
}

function visibleRecipes() {
  let list = recipes.filter(recipeMatches);
  if (state.sorted) {
    list = [...list].sort((a, b) => a.result.localeCompare(b.result));
  }
  return list;
}

function renderRecipes() {
  const visible = visibleRecipes();
  recipeGrid.innerHTML = visible.map((recipe, index) => {
    const parts = recipe.inputs.map((id) => {
      const item = byId.get(id);
      const className = passives.some((passive) => passive.id === id) ? "passive-icon" : "ball-icon";
      return `${icon(item, className)}<span>${item.name}</span>`;
    }).join('<span class="operator">+</span>');
    return `
      <button class="recipe-card ${recipeHighlighted(recipe) ? "highlight" : ""}" data-index="${index}" type="button">
        <div class="recipe-line">${parts}<span class="operator">=</span>${icon({ name: recipe.result, image: recipe.image }, "result-icon")}</div>
        <span class="result-name">${recipe.result}</span>
        <div class="tag-row">${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </button>
    `;
  }).join("");
  matchCount.textContent = `${visible.length} ${visible.length === 1 ? "match" : "matches"}`;
}

function renderDetails(recipe) {
  if (!recipe) {
    detailPanel.innerHTML = `<p class="eyebrow">Details</p><h2>Select an evolution</h2><p>Click a recipe card to pin the inputs, result, and notes here.</p>`;
    return;
  }
  const inputNames = recipe.inputs.map((id) => byId.get(id).name).join(" + ");
  detailPanel.innerHTML = `
    <p class="eyebrow">${categories.find((category) => category.id === recipe.category)?.name || "Evolution"}</p>
    <h2>${recipe.result}</h2>
    <p><strong>${inputNames}</strong></p>
    <p>${recipe.note}</p>
    <div class="tag-row">${recipe.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
}

function render() {
  renderTabs();
  renderChips();
  renderRecipes();
  renderDetails(state.pinned);
}

tabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  state.category = tab.dataset.category;
  render();
});

ballGrid.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-ball]");
  if (!chip) return;
  const id = chip.dataset.ball;
  if (state.selectedBalls.has(id)) state.selectedBalls.delete(id);
  else state.selectedBalls.add(id);
  renderChips();
  renderRecipes();
});

passiveGrid.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-passive]");
  if (!chip) return;
  const id = chip.dataset.passive;
  if (state.selectedPassives.has(id)) state.selectedPassives.delete(id);
  else state.selectedPassives.add(id);
  renderChips();
  renderRecipes();
});

recipeGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".recipe-card");
  if (!card) return;
  state.pinned = visibleRecipes()[Number(card.dataset.index)];
  renderDetails(state.pinned);
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderRecipes();
});

sortButton.addEventListener("click", () => {
  state.sorted = !state.sorted;
  sortButton.classList.toggle("active", state.sorted);
  sortButton.textContent = state.sorted ? "Original order" : "Sort by result";
  renderRecipes();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state.selectedBalls.clear();
  state.selectedPassives.clear();
  state.query = "";
  searchInput.value = "";
  state.pinned = null;
  render();
});

document.querySelector("#ballToggle").addEventListener("click", () => {
  ballGrid.closest(".filter-panel").classList.toggle("collapsed");
});

document.querySelector("#passiveToggle").addEventListener("click", () => {
  passiveGrid.closest(".filter-panel").classList.toggle("collapsed");
});

render();
