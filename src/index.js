import "./styles.css";
import "./modern-normalize.css";
import { displayHomepage } from "./homepage.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

function removeContent() {
    const container = document.getElementById("content");
    if(container) { container.replaceChildren(); }
}

const home = document.getElementById("home");
home.addEventListener("click", () => {
    removeContent();
    displayHomepage();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    removeContent();
    displayMenu();
});

const about = document.getElementById("about");
about.addEventListener("click", () => {
    removeContent();
    displayAbout();
});