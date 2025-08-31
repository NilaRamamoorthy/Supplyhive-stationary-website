//  // Simulate login status — you should replace this with your actual login logic
//   const isLoggedIn = localStorage.getItem("user") !== null;

//   const dropdownMenu = document.getElementById("userDropdownMenu");

//   if (isLoggedIn) {
//     dropdownMenu.innerHTML = `
//       <li><a class="dropdown-item" href="./orders.html">Orders</a></li>
//       <li><hr class="dropdown-divider"></li>
//       <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
//     `;
//   } else {
//     dropdownMenu.innerHTML = `
//       <li><a class="dropdown-item" href="./signin.html">Login</a></li>
//     `;
//   }

//   function logout() {
//     localStorage.removeItem("user"); // clear user session
//     alert("You have been logged out.");
//     window.location.reload(); // Reload to update menu
//   }
// Check if user is logged in
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = localStorage.getItem("user");

  const dropdownMenu = document.getElementById("userDropdownMenu");

  if (dropdownMenu) {
    if (user && isLoggedIn) {
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
  }

  window.logout = function () {
    localStorage.setItem("isLoggedIn", "false"); // keep user
    alert("You have been logged out.");
    window.location.reload();
  };
});
