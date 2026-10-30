// Lebu+ main script — shared by every page
const STORAGE_KEY = "lebu-plus-my-list";

// ---------- My List (localStorage) ----------
function getList() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch (e) {
    return [];
  }
}

function saveList(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  updateListCount();
}

function isInList(id) {
  return getList().includes(id);
}

function toggleList(id) {
  let list = getList();
  const item = TITLES.find((t) => t.id === id);

  if (!item) return;

  if (list.includes(id)) {
    list = list.filter((x) => x !== id);
    showToast(`Removed "${item.title}" from My List`);
  } else {
    list.push(id);
    showToast(`Added "${item.title}" to My List`);
  }

  saveList(list);
  refreshListButtons();

  if (document.body.dataset.page === "mylist") {
    renderMyList();
  }
}

function updateListCount() {
  const badge = document.querySelector("#list-count");

  if (badge) {
    badge.textContent = getList().length;
  }
}

function refreshListButtons() {
  document.querySelectorAll("[data-list-btn]").forEach((btn) => {
    const inList = isInList(Number(btn.dataset.listBtn));

    btn.textContent = inList ? "✓ In My List" : "+ My List";
    btn.setAttribute("aria-pressed", inList);
  });
}

// ---------- Feedback ----------
function showToast(message) {
  const el = document.querySelector("#app-toast");

  if (!el) return;

  el.querySelector(".toast-body").textContent = message;
  bootstrap.Toast.getOrCreateInstance(el, { delay: 2200 }).show();
}


// ---------- Local profile (no password is stored) ----------
const PROFILE_KEY = "lebu-plus-profile";
function updateAccountNavigation() {
  const button = document.querySelector("#account-button");
  if (!button) return;
  let profile = null;
  try { profile = JSON.parse(localStorage.getItem(PROFILE_KEY)); } catch (e) { profile = null; }
  button.textContent = profile && profile.name ? `Hi, ${profile.name.trim().split(/\s+/)[0]}` : "Sign In";
  button.setAttribute("aria-label", profile && profile.name ? `Hi, ${profile.name}. Open your profile` : "Sign in or create a local profile");
}

function initAccount() {
  const button = document.querySelector("#account-button");
  const form = document.querySelector("#account-form");
  const nameInput = document.querySelector("#account-name");
  const emailInput = document.querySelector("#account-email");
  const signout = document.querySelector("#account-signout");
  if (!button || !form) return;
  let profile = null;
  try { profile = JSON.parse(localStorage.getItem(PROFILE_KEY)); } catch (e) { profile = null; }
  const update = () => {
    button.textContent = profile ? `Hi, ${profile.name.split(" ")[0]}` : "Sign In";
    button.setAttribute("aria-label", profile ? `Signed in locally as ${profile.name}. Open profile` : "Sign in or create a local profile");
    signout.classList.toggle("d-none", !profile);
    if (profile) { nameInput.value = profile.name; emailInput.value = profile.email; }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    profile = { name: nameInput.value.trim(), email: emailInput.value.trim() };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    update();
    const modal = document.querySelector("#account-modal");
    bootstrap.Modal.getOrCreateInstance(modal).hide();
    showToast(`Welcome to Lebu+, ${profile.name.split(" ")[0]}! Your local profile is ready.`);
  });
  signout.addEventListener("click", () => {
    localStorage.removeItem(PROFILE_KEY); profile = null; form.reset(); update();
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#account-modal")).hide();
    showToast("You have signed out of this browser.");
  });
  update();
}

// ---------- Rendering ----------
function createCard(item) {
  const card = document.createElement("article");
  card.className = "title-card";

  // Use the individual poster assigned to each movie
  const poster = item.poster || "images/logo.svg";

  card.innerHTML = `
    <img
      src="${poster}"
      alt="Poster for ${item.title}, a ${item.genre.toLowerCase()} ${item.type.toLowerCase()}"
      loading="lazy"
      onerror="this.onerror=null; this.src='images/logo.svg'; this.classList.add('poster-fallback');"
    >

    <div class="card-body">
      <h3>${item.title}</h3>

      <span class="meta">
        ${item.genre} · ${item.type} · ${item.year || "Year unverified"} · ${item.duration} · ${item.rating == null ? "Rating unavailable" : "★ " + item.rating + "/10"}
      </span>

      <p>${item.description}</p>

      <div class="card-actions">
        <button class="btn btn-lumora" data-details="${item.id}">
          Details
        </button>

        <button
          class="btn btn-ghost"
          data-list-btn="${item.id}"
          aria-pressed="false"
        >
          + My List
        </button>
      </div>
    </div>
  `;

  card.querySelector("img").addEventListener("click", () => {
    openDetails(item.id);
  });

  return card;
}

function renderInto(container, items) {
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    container.appendChild(createCard(items[i]));
  }

  refreshListButtons();
}

function openDetails(id) {
  const item = TITLES.find((t) => t.id === id);
  if (!item) return;

  const modal = document.querySelector("#details-modal");
  modal.querySelector(".modal-title").textContent = item.title;
  const poster = item.poster || "images/logo.svg";
  const year = item.year || "Year unverified";
  const rating = item.rating == null
    ? "Rating unavailable"
    : `★ ${item.rating}/10 (${item.ratingSource || "IMDb"})`;

  const watchLink = item.watchUrl
    ? `<a class="btn btn-lumora" href="${item.watchUrl}" target="_blank" rel="noopener">Find viewing options ↗</a>`
    : "";
  const infoLink = item.externalUrl
    ? `<a class="btn btn-ghost" href="${item.externalUrl}" target="_blank" rel="noopener">Movie information ↗</a>`
    : "";
  const trailerLink = item.trailerUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " official trailer")}`;

  modal.querySelector(".modal-body").innerHTML = `
    <div class="row g-4">
      <div class="col-md-4">
        <img src="${poster}" class="img-fluid rounded"
          alt="Poster for ${item.title}"
          onerror="this.onerror=null; this.src='images/logo.svg'; this.classList.add('poster-fallback');">
      </div>
      <div class="col-md-8">
        <p class="text-secondary mb-2">
          ${item.genre} · ${item.type} · ${year} · ${item.duration} · ${rating}
        </p>
        <p>${item.description}</p>
        <div class="d-flex flex-wrap gap-2 mb-3">
          ${watchLink}
          ${infoLink}
          <a class="btn btn-ghost" href="${trailerLink}" target="_blank" rel="noopener">Find Official Trailer ↗</a>
          <button class="btn btn-ghost" data-list-btn="${item.id}" aria-pressed="${isInList(item.id)}">${isInList(item.id) ? "✓ In My List" : "+ My List"}</button>
        </div>
        ${item.rating == null ? '<small class="text-secondary">No verified rating is displayed for this title yet.</small>' : `<small class="text-secondary">Ratings can change over time. Source: ${item.ratingSource || "IMDb"}.</small>`}
      </div>
    </div>
  `;

  refreshListButtons();
  bootstrap.Modal.getOrCreateInstance(modal).show();
}

// ---------- Home page ----------
function initHome() {
  const rows = {
    trending: "#row-trending",
    popular: "#row-popular",
    new: "#row-new"
  };

  for (const tag in rows) {
    const container = document.querySelector(rows[tag]);

    if (container) {
      renderInto(
        container,
        TITLES.filter((t) => t.tags.includes(tag))
      );
    }
  }

  // Recommended: highest rated
  const recommended = [...TITLES]
    .sort((a, b) => (b.rating ?? -1) - (a.rating ?? -1))
    .slice(0, 6);

  renderInto(
    document.querySelector("#row-recommended"),
    recommended
  );

  document.querySelector("#hero-details")?.addEventListener("click", () => {
    openDetails(3);
  });

  document.querySelector("#hero-list")?.addEventListener("click", () => {
    toggleList(3);
  });

}

// ---------- Browse page ----------
function fillSelect(select, values) {
  if (!select) return;

  values.forEach((value) => {
    const option = document.createElement("option");

    option.value = value;
    option.textContent = value;

    select.appendChild(option);
  });
}

function initBrowse() {
  const search = document.querySelector("#search");
  const genre = document.querySelector("#genre");
  const type = document.querySelector("#type");
  const year = document.querySelector("#year");

  if (!search || !genre || !type || !year) return;

  fillSelect(
    genre,
    [...new Set(TITLES.map((t) => t.genre))].sort()
  );

  fillSelect(
    type,
    [...new Set(TITLES.map((t) => t.type))].sort()
  );

  fillSelect(
    year,
    [...new Set(TITLES.map((t) => t.year))]
      .sort((a, b) => b - a)
  );

  const params = new URLSearchParams(location.search);

  if (params.get("q")) {
    search.value = params.get("q");
  }

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    const results = [];

    for (const item of TITLES) {
      const matchText =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      const matchGenre =
        genre.value === "all" || item.genre === genre.value;

      const matchType =
        type.value === "all" || item.type === type.value;

      const matchYear =
        year.value === "all" || item.year === Number(year.value);

      if (matchText && matchGenre && matchType && matchYear) {
        results.push(item);
      }
    }

    const grid = document.querySelector("#catalogue");
    const count = document.querySelector("#result-count");

    if (!grid || !count) return;

    if (results.length === 0) {
      grid.innerHTML = `
        <p class="empty-state" style="grid-column:1/-1">
          No titles match your search.
          Try another word or reset the filters.
        </p>
      `;
    } else {
      renderInto(grid, results);
    }

    count.textContent = `${results.length} of ${TITLES.length} titles`;
  }

  search.addEventListener("input", applyFilters);

  [genre, type, year].forEach((select) => {
    select.addEventListener("change", applyFilters);
  });

  document.querySelector("#reset")?.addEventListener("click", () => {
    search.value = "";
    genre.value = "all";
    type.value = "all";
    year.value = "all";

    applyFilters();
  });

  applyFilters();
}

// ---------- My List page ----------
function renderMyList() {
  const ids = getList();
  const grid = document.querySelector("#mylist");

  if (!grid) return;

  const items = TITLES.filter((t) => ids.includes(t.id));

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <p>Your list is empty.</p>
        <a class="btn btn-lumora" href="browse.html">
          Browse titles
        </a>
      </div>
    `;
  } else {
    renderInto(grid, items);
  }

  const clearButton = document.querySelector("#clear-list");

  if (clearButton) {
    clearButton.disabled = items.length === 0;
  }
}

function initMyList() {
  renderMyList();

  document.querySelector("#clear-list")?.addEventListener("click", () => {
    if (confirm("Remove every title from My List?")) {
      saveList([]);
      renderMyList();
      showToast("My List cleared");
    }
  });
}

// ---------- Fetch catalogue JSON with a reliable built-in fallback ----------
async function loadCatalogueData() {
  const status = document.querySelector("#catalogue-status");
  try {
    const response = await fetch("data/catalogue.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Catalogue request failed (${response.status})`);
    const fetchedTitles = await response.json();
    if (!Array.isArray(fetchedTitles) || fetchedTitles.length < 12) {
      throw new Error("Catalogue data is incomplete");
    }
    TITLES.splice(0, TITLES.length, ...fetchedTitles);
    if (status) status.textContent = `Catalogue loaded successfully: ${TITLES.length} titles available.`;
    return true;
  } catch (error) {
    // Opening index.html directly may block fetch; js/data.js remains a working fallback.
    if (status) status.textContent = `Using the built-in catalogue (${TITLES.length} titles). For the JSON-fetch demonstration, open the site through a local development server.`;
    console.info("Using built-in catalogue fallback:", error.message);
    return false;
  }
}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", async () => {
  await loadCatalogueData();
  updateListCount();

  document.addEventListener("click", (event) => {
    const listButton = event.target.closest("[data-list-btn]");

    if (listButton) {
      event.stopPropagation();
      toggleList(Number(listButton.dataset.listBtn));
      return;
    }

    const detailsButton = event.target.closest("[data-details]");

    if (detailsButton) {
      openDetails(Number(detailsButton.dataset.details));
    }
  });

  const modal = document.querySelector("#details-modal");

  if (modal) {
    modal.addEventListener("hidden.bs.modal", (event) => {
      event.target.querySelector(".modal-body").innerHTML = "";
    });
  }

  updateAccountNavigation();
  initAccount();

  const page = document.body.dataset.page;

  if (page === "home") {
    initHome();
  } else if (page === "browse") {
    initBrowse();
  } else if (page === "mylist") {
    initMyList();
  } else if (page === "about") {
    // FAQ interactions are handled by Bootstrap.
  }
});