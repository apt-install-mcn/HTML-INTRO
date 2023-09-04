document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle-checkbox");
    const themeStyle = document.getElementById("theme-style");
  

    const isDarkMode = localStorage.getItem("dark-mode");
  
 
    function toggleDarkMode() {
      if (themeToggle.checked) {
        themeStyle.setAttribute("href", "style-dark.css");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        themeStyle.setAttribute("href", "style-light.css");
        localStorage.setItem("dark-mode", "disabled");
      }
    }
 
    themeToggle.addEventListener("change", function () {
      toggleDarkMode();
    });
  

    if (isDarkMode === "enabled") {
      themeToggle.checked = true;
      themeStyle.setAttribute("href", "style-dark.css");
    }
  });
  