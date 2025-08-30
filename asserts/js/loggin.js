 // Simulate login status — you should replace this with your actual login logic
  const isLoggedIn = localStorage.getItem("user") !== null;

  const dropdownMenu = document.getElementById("userDropdownMenu");

  if (isLoggedIn) {
    dropdownMenu.innerHTML = `
      <li><a class="dropdown-item" href="./orders.html">Orders</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
    `;
  } else {
    dropdownMenu.innerHTML = `
      <li><a class="dropdown-item" href="./signin.html">Login</a></li>
    `;
  }

  function logout() {
    localStorage.removeItem("user"); // clear user session
    alert("You have been logged out.");
    window.location.reload(); // Reload to update menu
  }