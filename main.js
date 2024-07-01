import './style.css';

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
        hamburger.style.display = "none";
        close.style.display="block";
    }
});

close.addEventListener("click", () => {
    navMenu.style.display = "none";
    hamburger.style.display = "block";
    close.style.display="none";
});


