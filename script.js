// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

// Automatic current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Typing animation
const words = [
    "Cybersecurity",
    "Programming",
    "Linux",
    "Technology"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();