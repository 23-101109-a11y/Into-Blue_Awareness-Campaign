// preloader

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 2000);
});

// preloader

// theme switcher

document.getElementById("mode-toggle").innerHTML = document.getElementById("mode-toggle").innerHTML;
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// theme switcher
