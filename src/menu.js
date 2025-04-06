export default function loadMenu() {

const content = document.getElementById("content");
content.innerHTML = ""; // Nettoie le contenu précédent

// Titre principal du menu pour les boissons
const drinkMenu = document.createElement("div");
drinkMenu.classList.add("drink-menu");
drinkMenu.textContent = "Nos boissons";
content.appendChild(drinkMenu);

// BOISSONS
function addDrink(container, name, description, price){
    const drinkItem = document.createElement("div");
    drinkItem.classList.add("drink-item");

    const title = document.createElement("h3");
    title.textContent = name;
    title.classList.add("drink-title");

    const para = document.createElement("p");
    para.innerHTML = `${description}<br><strong>${price}€</strong>`;
    para.classList.add("drink-description");

    drinkItem.appendChild(title);
    drinkItem.appendChild(para);
    container.appendChild(drinkItem);
}

addDrink(content, "Bubble Tea Classique", "Notre incontournable ! Thé noir ou vert au lait avec perles de tapioca, sucré juste comme il faut.", 3);
addDrink(content, "Thé au lait Taro", "Crémeux, légèrement sucré, et délicieusement violet. Fait avec du vrai taro pour un goût authentique.", 5);
addDrink(content, "Jus de prune glacé", "Un classique rafraîchissant à la saveur douce-acide, parfait pour les journées chaudes.", 2.5);

// Titre principal du menu pour les entrées
const starterMenu = document.createElement("div");
starterMenu.classList.add("starter-menu");
starterMenu.textContent = "Nos entrées";
content.appendChild(starterMenu);

// ENTRÉES
function addStarters(container, name, description, price){
    const starterItem = document.createElement("div");
    starterItem.classList.add("starter-item");

    const title = document.createElement("h3");
    title.textContent = name;
    title.classList.add("starter-title");

    const para = document.createElement("p");
    para.innerHTML = `${description}<br><strong>${price}€</strong>`;
    para.classList.add("starter-description");

    starterItem.appendChild(title);
    starterItem.appendChild(para);
    container.appendChild(starterItem);
}

addStarters(content, "Gua Bao (1 pièce)", "Petit pain vapeur garni de porc fondant, cacahuètes moulues, coriandre et pickles.", 4);
addStarters(content, "Rouleaux de printemps taïwanais", "Rouleaux frais garnis de légumes croquants, tofu, et herbes fraîches, servis avec une sauce à la cacahuète.", 3.5);
addStarters(content, "Soupe miso aux algues", "Un bol de bouillon léger aux algues wakame, tofu et ciboulette.", 3);

// Titre principal pour les plats principaux
const mainMenu = document.createElement("div");
mainMenu.classList.add("main-menu");
mainMenu.textContent = "Nos Plats";
content.appendChild(mainMenu);

// PLATS PRINCIPAUX
function addMainDish(container, name, description, price) {
    const mainItem = document.createElement("div");
    mainItem.classList.add("main-item");

    const title = document.createElement("h3");
    title.textContent = name;
    title.classList.add("main-title");

    const para = document.createElement("p");
    para.innerHTML = `${description}<br><strong>${price}€</strong>`;
    para.classList.add("main-description");

    mainItem.appendChild(title);
    mainItem.appendChild(para);
    container.appendChild(mainItem);
}

addMainDish(content, "Bento au poulet croustillant", "Poulet frit façon taïwanaise, riz parfumé, légumes sautés et œuf mariné. Le classique !", 9);
addMainDish(content, "Nouilles au bœuf", "Nouilles faites maison dans un bouillon riche au bœuf mijoté, avec légumes et ciboulette.", 10);
addMainDish(content, "Tofu braisé et légumes", "Option végétarienne : tofu mariné et braisé, servi avec du riz, légumes et sauce soja sucrée.", 8);

// Titre principal pour les desserts
const dessertMenu = document.createElement("div");
dessertMenu.classList.add("dessert-menu");
dessertMenu.textContent = "Nos Desserts";
content.appendChild(dessertMenu);

// DESSERTS
function addDessert(container, name, description, price) {
    const dessertItem = document.createElement("div");
    dessertItem.classList.add("dessert-item");

    const title = document.createElement("h3");
    title.textContent = name;
    title.classList.add("dessert-title");

    const para = document.createElement("p");
    para.innerHTML = `${description}<br><strong>${price}€</strong>`;
    para.classList.add("dessert-description");

    dessertItem.appendChild(title);
    dessertItem.appendChild(para);
    container.appendChild(dessertItem);
}

addDessert(content, "Douhua (tofu soyeux sucré)", "Un dessert léger à base de tofu soyeux nappé de sirop de sucre brun et perles de tapioca.", 3);
addDessert(content, "Mochis glacés", "Boules glacées enveloppées dans une pâte de riz douce. Parfaits pour finir sur une touche sucrée.", 2.5);
};