function toggleCard(card) {
    const description = card.querySelector('.description');
    const shareBtn = card.querySelector('.share-btn');
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}


function createCard(receta) {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => toggleCard(card);
    card.innerHTML = `
      <img src="${receta.imagen}" alt="${receta.nombre}">
      <h3>${receta.nombre}</h3>
      <p class="description" style="display: none"; >${receta.descripcion}</p>
    `;
    return card;
}

function loadRecetas() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const recetasContainer = document.getElementById('recetas-container');
            const lines = this.responseText.split('\n');
            lines.forEach(line => {
                const [nombre, imagen, descripcion] = line.split(';');
                const receta = { nombre, imagen, descripcion };
                const card = createCard(receta);
                recetasContainer.appendChild(card);
            });
        }
    };
    xhttp.open('GET', 'recetas.txt', true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', loadRecetas);