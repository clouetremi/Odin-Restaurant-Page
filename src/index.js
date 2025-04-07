import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./style-sheet.css";

document.addEventListener("DOMContentLoaded", () => {
    loadHome(); // Affichage de la page d'acceuil
});

// Cibler les boutons
const btnHome = document.getElementById("btnHome");
const btnMenu = document.getElementById("btnMenu");
const btnContact = document.getElementById("btnContact");

btnHome.addEventListener("click", loadHome);
btnMenu.addEventListener("click", loadMenu);
btnContact.addEventListener("click", loadContact);