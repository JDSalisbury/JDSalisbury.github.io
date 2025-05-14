fetch("bookmarks.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("bookmark-container");

    Object.entries(data).forEach(([category, bookmarks]) => {
      const card = document.createElement("div");
      card.classList.add("category-card");

      const title = document.createElement("h2");
      title.textContent = category;
      card.appendChild(title);

      const list = document.createElement("ul");
      list.classList.add("bookmark-list");

      bookmarks.forEach(({ href, ICON, desc }) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        if (ICON) {
          const icon = document.createElement("img");
          icon.src = ICON;
          icon.alt = "";
          icon.classList.add("favicon");
          link.appendChild(icon);
        }

        const text = document.createElement("span");
        text.textContent = new URL(href).hostname;
        link.appendChild(text);

        if (desc) {
          const description = document.createElement("small");
          description.textContent = desc;
          description.classList.add("desc");
          listItem.appendChild(description);
        }

        listItem.appendChild(link);
        list.appendChild(listItem);
      });

      card.appendChild(list);
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading bookmarks:", error);
  });

function loadRandomQuote() {
  fetch("https://api.quotable.io/random?tags=technology")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }
      return res.json();
    })
    .then((data) => {
      const quoteBox = document.getElementById("quote-text");
      quoteBox.textContent = `"${data.content}" — ${data.author}`;
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("quote-text").textContent =
        "Couldn't load quote.";
    });
}

// Load quote on page load
window.addEventListener("DOMContentLoaded", loadRandomQuote);

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
}

function toggleTheme() {
  const current = document.body.classList.contains("dark") ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// On load
const storedTheme = localStorage.getItem("theme") || "light";
applyTheme(storedTheme);
