// preloader

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 2000);
});

// preloader

// header

let navBar = [
    {
        section: "Home",
        id: "home"
    },
    {
        section: "Marine Life",
        id: "animals"
    },
    {
        section: "Facts",
        id: "facts"
    }
];

let nav = document.getElementById("navBar");

for (let i = 0; i < navBar.length; i++) {
    nav.innerHTML += `
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

// login function

function login() {

    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let errorMsg = document.getElementById("errorMsg");

    let localUsers = JSON.parse(localStorage.getItem("localUsers"));

    let userFound = false;

    for (let i = 0; i < localUsers.length; i++) {
        if (
            email === localUsers[i].email &&
            password == localUsers[i].password
        ) {

        userFound = true;

        localStorage.setItem("currentUser", JSON.stringify(localUsers[i]));

        window.location = "index.html";
        break;
        }
    }

    if (!userFound) {
        errorMsg.style.display = "inline-block";
    }
}

// login function