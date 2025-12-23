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
        section: "Crisis",
        id: "crisis"
    },
    {
        section: "Marine Life",
        id: "animals"
    },
    {
        section: "Facts",
        id: "facts"
    },
    {
        section: "Connect",
        id: "connect"
    }
];

let nav = document.getElementById("navBar");

for (let i = 0; i < navBar.length; i++) {
    nav.innerHTML += `
    <li><a href="#${navBar[i].id}">${navBar[i].section}</a></li>
    `;
}

let links = document.querySelectorAll("#navBar a");

window.addEventListener("scroll", () => {

for (let i = 0; i < navBar.length; i++) {

let section = document.getElementById(navBar[i].id);
let sectionTop = section.offsetTop;
let sectionHeight = section.offsetHeight;
let scrollPosition = window.scrollY;

if (
    scrollPosition >= sectionTop - 50 &&
    scrollPosition < sectionTop + sectionHeight - 50
    ) {
        links.forEach(link => link.classList.remove("active"));
        links[i].classList.add("active");
    }
  }
});

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

// crisis section

document.getElementById("secTitleCrisis").innerHTML = "Ocean Crisis";

const shortText = 'Our oceans, once teeming with life and color, are now under unprecedented threat. Pollution, overfishing, and rising temperatures are driving countless species to the brink of extinction. Coral reefs, the vibrant heart of marine ecosystems, are bleaching and dying, leaving behind barren landscapes where life once thrived.';

const fullText = 'Our oceans, once teeming with life and color, are now under unprecedented threat. Pollution, overfishing, and rising temperatures are driving countless species to the brink of extinction. Coral reefs, the vibrant heart of marine ecosystems, are bleaching and dying, leaving behind barren landscapes where life once thrived. Sea creatures, from the smallest fish to the largest whales, face challenges from plastic waste, habitat loss, and changing currents that disrupt their natural rhythms. Each action we take—or fail to take—echoes through the waters, affecting the delicate balance of life beneath the waves. The oceans’ silent cries remind us that the time to act is now, before these underwater worlds are lost forever.';

document.getElementById("crisisText1").innerHTML = shortText;
document.getElementById("crisisReadMore").innerHTML = "Read More";

let isExpanded = false;

document.getElementById("crisisReadMore").addEventListener("click", function() {
    if (isExpanded) {

        document.getElementById("crisisText1").innerHTML = shortText;
        document.getElementById("crisisReadMore").innerHTML = "Read More";
        isExpanded = false;
    } else {
        document.getElementById("crisisText1").innerHTML = fullText;
        document.getElementById("crisisReadMore").innerHTML = "Read Less";
        isExpanded = true;
    }
});

// crisis section

// random element section
document.getElementById("secTitle1").innerHTML = "Marine Life";

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


// did you know section

document.getElementById("secTitle2").innerHTML = "Did you know?";

let facts1 = [{
    number: "1",
    fact: "The 5 most common types of debris found in marine clean-ups are all single-use plastics.",
},{
    number: "2",
    fact: "Ocean noise pollution in some areas has doubled every decade for the last 60 years, causing stress, disturbance and even death of marine life.",
}]

let facts2 = [{
    number: "3",
    fact: "There are over 500 ‘dead ocean zones’ across the world, covering an area equal to the United Kingdom. ",
},{
    number: "4",
    fact: "Each year, over 1 million seabirds, 300,000 porpoises and dolphins, and 100,000 other marine mammals are killed by ocean pollution - often this is from entanglement from nets and ingestion of plastics. ",
}]

for (i = 0; i < facts1.length; i++) {
    document.getElementById("factsRow1").innerHTML += `
            <div class="fact">
                <span>${facts1[i].number}</span>
                <h6>${facts1[i].fact}</h6>
            </div>`;
}

for (i = 0; i < facts2.length; i++) {
    document.getElementById("factsRow2").innerHTML += `
            <div class="fact">
                <span>${facts2[i].number}</span>
                <h6>${facts2[i].fact}</h6>
            </div>`;
}


// did you know section


// connect section

document.getElementById("secTitle3").innerHTML = "Be the Voice for the Ocean";
document.getElementById("connectText").innerHTML = "Your thoughts, questions, and ideas matter. Every message helps keep the ocean alive.";


// connect section

// footer

document.getElementById("footerSlogan").innerHTML = "Protect the marine life";
document.getElementById("copyrights").innerHTML = "© 2025 Into Blue. All rights reserved.";


// footer 


// scroll to top button

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

window.onscroll = scrollFunction;

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// scroll to top button
