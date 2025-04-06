const content = document.getElementById("content");


function addContact(container, name, description, telephone){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const title = document.createElement("h3");
    title.textContent = name; 
    title.classList.add("contact-title"); 

    const para = document.createElement("p");
    para.innerHTML = `${description}`;
    para.classList.add("contact-description");

    const phone = document.createElement("p");
    phone.innerHTML = `<strong>Contact : ${telephone}</strong>`;
    phone.classList.add("telephone");

    content.appendChild(contact);
    contact.appendChild(title);
    contact.appendChild(para);
    contact.appendChild(phone);
}

addContact(content, "Jenny Chen", "Manager du restaurant, passionnée de cuisine taïwanaise depuis son enfance. Elle veille à la qualité du service et à l’authenticité de chaque plat servi.", "0654859213")
addContact(content, "Lucas Wang", "Chef cuisinier formé à Taipei, Lucas revisite les classiques taïwanais avec une touche moderne. Il est à l’origine de toutes les recettes de la maison.", "0785421596")
addContact(content, "Mei Lin", "Responsable de la communication et du design. Mei s’occupe des réseaux sociaux, des visuels du menu et adore partager les coulisses du restaurant avec la communauté.", "0652442987")
