import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    loadHome(); // Affichage de la page d'acceuil
});

// Cibler les boutons
const btnHome = document.getElementById("btnHome")
const btnMenu = document.getElementById("btnMenu")
const btnContact = document.getElementById("btnContact")