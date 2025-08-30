 function viewProduct(element) {
  const productId = element.getAttribute("data-id");
  const product = products.find(p => p.id == productId);

  if (!product) {
    alert("Product not found.");
    return;
  }

  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html"; // or your actual product detail page
}

function renderProducts(productList) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  productList.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="product-card mx-5 mx-md-0" onclick="viewProduct(this)" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <div class="card-body pt-4">
        <h6 class="mt-2">${product.name}</h6>
        <div class="rating">★★★★★</div>
        <p><strong>Rs. ${product.price}</strong><br>
          <small>Buy 3 or more @ Rs. ${(product.price * 0.95).toFixed(2)}</small>
        </p>
        <button class="btn btn-light" onclick='event.stopPropagation(); addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      </div>
        </div>
    `;

    container.appendChild(col);
  });
}

  function filterProducts() {
    const selectedRanges = Array.from(document.querySelectorAll(".price-filter:checked")).map(cb => cb.value);

    if (selectedRanges.length === 0) {
      renderProducts(products); // Show all if no filter selected
      return;
    }

    const filtered = products.filter(product => {
      return selectedRanges.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });
    });

    renderProducts(filtered);
  }

  // Render all on load
  window.onload = () => {
    renderProducts(products);

    document.querySelectorAll(".price-filter").forEach(cb => {
      cb.addEventListener("change", filterProducts);
    });
  };
  function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-message alert alert-success position-fixed top-0 end-0 m-4 shadow";
  toast.style.zIndex = 9999;
  toast.style.minWidth = "200px";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

  function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart
  const existingIndex = cart.findIndex(item => item.name === product.name);
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${product.name} added to cart!`);
}
