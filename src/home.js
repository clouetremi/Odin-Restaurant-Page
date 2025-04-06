// src/home.js

export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Nettoyage au cas où
  
    const contentTitle = document.createElement("div");
    contentTitle.classList.add("content-title");
    contentTitle.textContent = "Formosa Bites";
    content.appendChild(contentTitle);
  
    const contentPresentation = document.createElement("div");
    contentPresentation.classList.add("content-presentation");
    contentPresentation.textContent = "Chez Formosa Bites, nous vous proposons une expérience authentique de la street food taïwanaise. Dégustez nos gua bao moelleux, nos bentos savoureux et nos célèbres bubble teas, le tout dans une ambiance chaleureuse rappelant les rues animées de Taipei.";
    content.appendChild(contentPresentation);
  
    const contentHours = document.createElement("div");
    contentHours.classList.add("content-hours");
    content.appendChild(contentHours);
  
    const hoursTitle2 = document.createElement("h2");
    hoursTitle2.innerText = "🕒 Horaires d'ouverture";
    contentHours.appendChild(hoursTitle2);
  
    const hoursGrid = document.createElement("div");
    hoursGrid.classList.add("hours-grid");
    hoursGrid.innerHTML = `
      <span>Dimanche :</span> <span>11h - 22h</span>
      <span>Lundi :</span> <span>11h - 15h</span>
      <span>Mardi :</span> <span>11h - 15h</span>
      <span>Mercredi :</span> <span>11h - 22h</span>
      <span>Jeudi :</span> <span>11h - 22h</span>
      <span>Vendredi :</span> <span>11h - 23h</span>
      <span>Samedi :</span> <span>11h - 23h</span>`;
    contentHours.appendChild(hoursGrid);
  
    const contentAddress = document.createElement("div");
    contentAddress.classList.add("content-address");
    contentAddress.textContent = "88 Rue de Taipei, Quartier Asiatique, Paris";
    content.appendChild(contentAddress);
  
    const contentValues = document.createElement("div");
    contentValues.classList.add("content-values");
    content.appendChild(contentValues);
  
    const valuesTitle2 = document.createElement("h2");
    valuesTitle2.textContent = "Nos valeurs";
    contentValues.appendChild(valuesTitle2);
  
    const valuesPara = document.createElement("p");
    valuesPara.innerHTML = "Chez <strong>Formosa Bites</strong>, nous mettons un point d’honneur à utiliser des <strong>ingrédients frais et authentiques</strong>. Nos plats sont préparés selon des recettes traditionnelles taïwanaises, pour vous offrir un goût inoubliable.";
    contentValues.appendChild(valuesPara);
  
    const contentTestimonials = document.createElement("div");
    contentTestimonials.classList.add("content-testimonials");
    content.appendChild(contentTestimonials);
  
    const testimonialsTitle2 = document.createElement("h2");
    testimonialsTitle2.textContent = "Ce que disent nos clients";
    contentTestimonials.appendChild(testimonialsTitle2);
  
    const testimonialsPara = document.createElement("p");
    testimonialsPara.innerHTML = `
      <blockquote>“Le Bubble Tea est excellent et les perles ont la texture parfaite.”</blockquote><br>
      <blockquote>“Les meilleurs Gua Bao que j’ai mangés en dehors de Taïwan ! Un pur délice.”</blockquote><br>
      <blockquote>“Ambiance chaleureuse et plats incroyables. J’y retournerai sans hésiter !”</blockquote>`;
    contentTestimonials.appendChild(testimonialsPara);
  }
  