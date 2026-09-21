/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* =========================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

}


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Software Developer",
    "Problem Solver"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thanks, ${name}! Your message has been received.`;

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();