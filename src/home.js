// src/home.js

function createElementWithText(tag, className, textContent) {

  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.innerHTML = textContent;
  return element;
  }
  
  function createGridContent(content){
    const grid = document.createElement("div");
    grid.classList.add("hours-grid");
    grid.innerHTML = content;
    return grid; 
  }
  
  export default function loadHome() {
      const content = document.getElementById("content");
      content.innerHTML = ""; // Nettoyage au cas où
      content.appendChild(createElementWithText("div", "content-title", "Formosa Bites"));
      content.appendChild(createElementWithText("div", "content-presentation", 
        "Chez Formosa Bites, nous vous proposons une expérience authentique de la street food taïwanaise. Dégustez nos gua bao moelleux, nos bentos savoureux et nos célèbres bubble teas, le tout dans une ambiance chaleureuse rappelant les rues animées de Taipei."));
    
      const contentHours = createElementWithText("div", "content-hours");
      const hoursTitle2 = createElementWithText("h2", "", "🕒 Horaires d'ouverture");
      const hoursGrid = createGridContent(`
        <span>Dimanche :</span> <span>11h - 22h</span>
        <span>Lundi :</span> <span>11h - 15h</span>
        <span>Mardi :</span> <span>11h - 15h</span>
        <span>Mercredi :</span> <span>11h - 22h</span>
        <span>Jeudi :</span> <span>11h - 22h</span>
        <span>Vendredi :</span> <span>11h - 23h</span>
        <span>Samedi :</span> <span>11h - 23h</span>
      `);
      contentHours.appendChild(hoursTitle2);
      contentHours.appendChild(hoursGrid);
      content.appendChild(contentHours);
    
      content.appendChild(createElementWithText("div", "content-address", "88 Rue de Taipei, Quartier Asiatique, Paris"));
    
      const contentValues = createElementWithText("div", "content-values");
      const valuesTitle2 = createElementWithText("h2", "", "Nos valeurs");
      const valuesPara = createElementWithText("p", "", "Chez <strong>Formosa Bites</strong>, nous mettons un point d’honneur à utiliser des <strong>ingrédients frais et authentiques</strong>. Nos plats sont préparés selon des recettes traditionnelles taïwanaises, pour vous offrir un goût inoubliable.");
      contentValues.appendChild(valuesTitle2);
      contentValues.appendChild(valuesPara);
      content.appendChild(contentValues);
    
      const contentTestimonials = createElementWithText("div", "content-testimonials");
      const testimonialsTitle2 = createElementWithText("h2", "", "Ce que disent nos clients");
      const testimonialsPara = createElementWithText("p", "", `
        <blockquote>“Le Bubble Tea est excellent et les perles ont la texture parfaite.”</blockquote><br>
        <blockquote>“Les meilleurs Gua Bao que j’ai mangés en dehors de Taïwan ! Un pur délice.”</blockquote><br>
        <blockquote>“Ambiance chaleureuse et plats incroyables. J’y retournerai sans hésiter !”</blockquote>
      `);
      contentTestimonials.appendChild(testimonialsTitle2);
      contentTestimonials.appendChild(testimonialsPara);
      content.appendChild(contentTestimonials);
    }
  