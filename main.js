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

// random element section

let animals = [{
    img: "imgs/animal1.png",
    name: "Vaquita",
    fact: "Fewer than 10 vaquitas remain in the wild, making it the most endangered marine mammal on Earth."
}, {
    img: "imgs/animal2.png",
    name: "Whale Shark",
    fact: "Whale sharks are the largest fish in the sea, growing up to 40 feet long and weighing as much as 20.6 tons."
}, {
    img: "imgs/animal3.png",
    name: "Galapagos Penguin",
    fact: "The Galapagos penguin is the only penguin species that lives north of the equator."
}, {
    img: "imgs/animal4.png",
    name: "Hawksbill Turtle",
    fact: "Hawksbill turtles play a crucial role in maintaining the health of coral reefs by controlling sponge populations."
}, {
    img: "imgs/animal5.png",
    name: "Florida Manatee",
    fact: "Florida manatees can consume up to 10% of their body weight in aquatic vegetation daily."
}, {
    img: "imgs/animal6.png",
    name: "River Dolphin",
    fact: "River dolphins have adapted to live in freshwater environments and have poor eyesight, relying on echolocation to navigate."
}];

document.getElementById("randomContainer").innerHTML = `
    <div class="random-content">
        <div class="random-animal-name">
            <h3 id="animalName"></h3>
            <img src="icons/warning-icon.svg">
        </div>
        <h6 id="animalFact"></h6>
        <button id="randomBtn">Meet another life</button>
    </div>
    <div id="randomAnimal" class="random-animal">
        <img id="animalImg">
    </div>
`;

function showRandomAnimal() {
    let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById("animalName").textContent = randomAnimal.name;
    document.getElementById("animalFact").textContent = randomAnimal.fact;
    document.getElementById("animalImg").src = randomAnimal.img;
}

showRandomAnimal();

document.getElementById("randomBtn").addEventListener("click", showRandomAnimal);

// random element section


// // random element section

// let animals = [{
//     img: "imgs/animal1.png",
//     name: "Vaquita",
//     fact: "Fewer than 10 vaquitas remain in the wild, making it the most endangered marine mammal on Earth."
// }, {
//     img: "imgs/animal2.png",
//     name: "Whale Shark",
//     fact: "Whale sharks are the largest fish in the sea, growing up to 40 feet long and weighing as much as 20.6 tons."
// }, {
//     img: "imgs/animal3.png",
//     name: "Galapagos Penguin",
//     fact: "The Galapagos penguin is the only penguin species that lives north of the equator."
// }, {
//     img: "imgs/animal4.png",
//     name: "Hawksbill Turtle",
//     fact: "Hawksbill turtles play a crucial role in maintaining the health of coral reefs by controlling sponge populations."
// }, {
//     img: "imgs/animal5.png",
//     name: "Florida Manatee",
//     fact: "Florida manatees can consume up to 10% of their body weight in aquatic vegetation daily."
// }, {
//     img: "imgs/animal6.png",
//     name: "Rivered Dolphin",
//     fact: "River dolphins have adapted to live in freshwater environments and have poor eyesight, relying on echolocation to navigate."
// }];


//     document.getElementById("randomContainer").innerHTML += `
//     <div class="random-content">
//                 <h2>${animals[i].name}</h2>
//                 <h6>${animals[i].fact}</h6>
//                 <button>Meet another life</button>
//             </div>
//             <div id="randomAnimal" class="random-animal">
//                 <img id="animalImg">
//             </div>
//       `;

// let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
// document.getElementById("animalImg").src = randomAnimal;

// // random element section
