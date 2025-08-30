function showAllResults() {
  const results = document.getElementById("searchResults");
  results.innerHTML = "";
  allProducts.forEach(product => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.innerHTML = `
      <img src="${product.image}" width="40" class="me-2" />
      <span>${product.name}</span>
    `;
    li.onclick = () => {
      alert(`Clicked on ${product.name}`);
      results.style.display = "none";
    };
    results.appendChild(li);
  });
  results.style.display = "block";
}

function filterSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("searchResults");

  if (!input) {
    showAllResults();
    return;
  }

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(input)
  );

  results.innerHTML = "";

  if (filtered.length === 0) {
    results.innerHTML = `<li class="list-group-item">No results found</li>`;
  } else {
    filtered.forEach(product => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex align-items-center";
      li.innerHTML = `
        <img src="${product.image}" width="40" class="me-2" />
        <span>${product.name}</span>
      `;
      li.onclick = () => {
        alert(`Clicked on ${product.name}`);
        results.style.display = "none";
      };
      results.appendChild(li);
    });
  }

  results.style.display = "block";
}

// Optional: Hide on outside click
document.addEventListener("click", (e) => {
  const searchBox = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  if (!searchBox.contains(e.target) && !results.contains(e.target)) {
    results.style.display = "none";
  }
});
