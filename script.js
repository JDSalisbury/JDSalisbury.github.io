fetch("bookmarks.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("bookmark-container");

    Object.entries(data).forEach(([category, bookmarks]) => {
      const section = document.createElement("section");
      section.classList.add("bookmark-section");

      const header = document.createElement("h2");
      header.textContent = category;
      section.appendChild(header);

      const list = document.createElement("ul");
      list.classList.add("bookmark-list");

      bookmarks.forEach(({ href, ICON, desc }) => {
        const listItem = document.createElement("li");
        listItem.classList.add("bookmark-item");

        const link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        if (ICON) {
          const icon = document.createElement("img");
          icon.src = ICON;
          icon.alt = "";
          icon.classList.add("bookmark-icon");
          link.appendChild(icon);
        }

        const label = document.createElement("span");
        label.textContent = desc || href;
        link.appendChild(label);

        listItem.appendChild(link);
        list.appendChild(listItem);
      });

      section.appendChild(list);
      container.appendChild(section);
    });
  })
  .catch((error) => {
    console.error("Error loading bookmarks:", error);
  });
