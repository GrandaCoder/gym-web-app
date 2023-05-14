import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, child, get, onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'


const fab = document.getElementById("mi-fab");
const iframe = document.getElementById("mi-iframe");

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

let params = (new URL(document.location)).searchParams;
let category = params.get("category");
console.log(category);
// Get a reference to the users node
const usersRef = ref(db, `cards/${category}`);

onValue(usersRef, (snapshot) => {
  const container = document.querySelector(".container");
  container.innerHTML = '';

  // const usersRef = ref(db, 'cards');
  // const snapshotCards = snapshot.child();
  
  // console.log(snapshot);



  snapshot.forEach((child) => {

    console.log(child.key);

    const nameChild = child.key;
    const prefix = "ej";

    if(nameChild.startsWith(prefix)){
      const userData = child.val();
      //console.log(userData.title, userData.videoId, userData.description);
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = userData.title;
  
      const description = document.createElement("p");
      description.classList.add("card-description");
      description.innerHTML = `<strong>Descripción:</strong> ${userData.description}`;
      
      const duracion = document.createElement("p");
      duracion.classList.add("card-description");
      duracion.innerHTML = `<strong>Duración:</strong> ${userData.time}`;

      //series
      const series = document.createElement("p");
      series.classList.add("card-description");
      series.innerHTML = `<strong>Series:</strong> ${userData.series}`;

      //Musculos trabajados
      const musculos = document.createElement("p");
      musculos.classList.add("card-description");
      musculos.innerHTML = `<strong>Grupos musculares involucrados:</strong> ${userData.muscles}`;

  
      const video = document.createElement("div");
      video.setAttribute("id", "player");
      video.setAttribute("data-plyr-provider", "youtube");
      video.setAttribute("data-plyr-embed-id", userData.videoId);
  
      card.appendChild(video);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(duracion);
      card.appendChild(series);
      card.appendChild(musculos);

      container.appendChild(card);
  
      // Inicializar Plyr
      const player = new Plyr(video);
    }
  });
});

fab.addEventListener("click", function() {
  if (iframe.style.display === "none") {
    iframe.style.display = "block";
  } else {
    iframe.style.display = "none";
  }
});




