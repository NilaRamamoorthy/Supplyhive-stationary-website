const searchInput = document.getElementById("searchInput");
const results = document.getElementById("search-results");
const mainContent = document.getElementById("main-content");
// const searchResults = document.getElementById("search-results");

// Display product cards
function displayResults(term) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(term.toLowerCase())
  );

  results.innerHTML = ""; // Clear previous results

  if (filtered.length === 0) {
    results.innerHTML = "<p class='text-muted'>No products found.</p>";
    return;
  }

filtered.forEach(p => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4"; // Responsive 4-in-a-row on large screens
  col.innerHTML = `
    <div class="product-card text-center" onclick='viewProduct(${JSON.stringify(JSON.stringify(p))})'>
      <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 200px; object-fit: contain; border-radius: 10px; background: #f8f8f8;">
      <h5 class="mt-2">${p.name}</h5>
      <p>Rs.${p.price}</p>
    </div>
  `;
  results.appendChild(col);
});

}

// Handle product click
function viewProduct(productJSON) {
  const product = JSON.parse(productJSON);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}


// Toggle views based on search input
//  const mainContent = document.getElementById("main-content");
// const searchResults = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim();

  if (term.length === 0) {
    mainContent.style.display = "block";
    results.style.display = "none";
  } else {
    mainContent.style.display = "none";
    results.style.display = "flex";  // or "block" works, but flex better for .row
    displayResults(term);
  }
});
