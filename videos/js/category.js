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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();


const contenedor = document.getElementById('contenedor');

// Get a reference to the users node
const usersRef = ref(db, `cards`);
onValue(usersRef, (snapshot) => {

    contenedor.innerHTML = '';
    snapshot.forEach((child) => {
        const cardKey = child.key
        const cardData = child.val();
        // console.log(`Clave: ${cardKey}, Datos: ${}`);
        createCardCategory(cardKey, cardData.categoryName);
    });
});

function createCardCategory(nombreSnapshot, nombreCategoria) {
    // 	<a href="videos.html?category=ej_hombres">Ejercicios para hombres</a>
    const a = document.createElement('a');
    a.href = `videos.html?category=${nombreSnapshot}`;
    a.textContent = nombreCategoria;
    contenedor.appendChild(a);
}





