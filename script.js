fetch("./bookmarks.json")
  .then((response) => response.json())
  .then((bookmarks) => {
    const container = document.getElementById("links-container");

    Object.entries(bookmarks).forEach(([category, links]) => {
      const section = document.createElement("div");
      section.className = "category";

      const heading = document.createElement("h2");
      heading.textContent = category;
      section.appendChild(heading);

      const ul = document.createElement("ul");
      links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    });
  })
  .catch((error) => {
    console.error("Failed to load bookmarks.json", error);
  });
