// preloader

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 2000);
});

// preloader

// header 

let navBar = [{
    section: "Home",
    id: "home",
}, {
    section: "Marine Life",
    id: "animals",
}]

for (i = 0; i < navBar.length; i++) {
    document.getElementById("navBar").innerHTML += `
    <li><a href="#${navBar[i].id}">${navBar[i].section}</a></li>
      `;
}

// header

// theme switcher

document.getElementById("mode-toggle").innerHTML = document.getElementById("mode-toggle").innerHTML;
document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// theme switcher

// hero

document.getElementById("heroText1").innerHTML = "INTO BLUE";
document.getElementById("heroText2").innerHTML = "Awareness Campaign";
document.getElementById("heroText3").innerHTML = "Protect the Marine Life";
document.getElementById("heroText4").innerHTML = "Small daily actions can protect marine life and keep our oceans alive.";
document.getElementById("scroller").innerHTML = "DIVE";

// hero
