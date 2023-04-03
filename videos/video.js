document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".container");
  
    // Leer el archivo TXT
    const response = await fetch("data.txt");
    const data = await response.text();
    const lines = data.split("\n");
  
    // Crear las cards
    for (let i = 0; i < lines.length; i += 3) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = lines[i];
  
      const description = document.createElement("p");
      description.classList.add("card-description");
      description.textContent = lines[i + 1];
  
      const video = document.createElement("div");
      video.setAttribute("id", "player");
      video.setAttribute("data-plyr-provider", "youtube");
      video.setAttribute("data-plyr-embed-id", lines[i + 2]);
    
  
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(video);
      container.appendChild(card);
  
      // Inicializar Plyr
      const player = new Plyr(video);
    }
  });