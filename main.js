import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, child, get, onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'

const firebaseConfig = {
    apiKey: "AIzaSyCiePTvHxga77QSi1FwWL8v67aExIJuiXo",
    authDomain: "demofit-c6501.firebaseapp.com",
    databaseURL: "https://demofit-c6501-default-rtdb.firebaseio.com",
    projectId: "demofit-c6501",
    storageBucket: "demofit-c6501.appspot.com",
    messagingSenderId: "154519836578",
    appId: "1:154519836578:web:069f02518ad9cbe37904fb",
    measurementId: "G-V3PB26LJ3P"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

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
    const recetasContainer = document.getElementById('recetas-container');
    const usersRef = ref(db, 'recetas');
    onValue(usersRef, (snapshot) => {
        snapshot.forEach((child) => {
            const recetaData = child.val();
            console.log(recetaData);
            const card = createCard(recetaData);
            recetasContainer.appendChild(card);
        });
    });

    // const receta = { nombre, imagen, descripcion };

}

// function loadRecetas() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             const recetasContainer = document.getElementById('recetas-container');
//             const lines = this.responseText.split('\n');
//             lines.forEach(line => {
//                 const [nombre, imagen, descripcion] = line.split(';');
//                 const receta = { nombre, imagen, descripcion };
//                 const card = createCard(receta);
//                 recetasContainer.appendChild(card);
//             });
//         }
//     };
//     xhttp.open('GET', 'recetas.txt', true);
//     xhttp.send();
// }

document.addEventListener('DOMContentLoaded', loadRecetas);