import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, child, get,onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'


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

// Get a reference to the users node
const usersRef = ref(db, 'cards');
onValue(usersRef, (snapshot) => {
  const container = document.querySelector(".container");
  container.innerHTML = '';
  
  snapshot.forEach((child) => {
    const userData = child.val();
    //console.log(userData.title, userData.videoId, userData.description);
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = userData.title;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = userData.description;

    const video = document.createElement("div");
    video.setAttribute("id", "player");
    video.setAttribute("data-plyr-provider", "youtube");
    video.setAttribute("data-plyr-embed-id", userData.videoId);


    card.appendChild(video);
    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);

    // Inicializar Plyr
    const player = new Plyr(video);

  });
});


// fab.addEventListener("click", function() {
//   if (iframe.style.display === "none") {
//     iframe.style.display = "block";
//   } else {
//     iframe.style.display = "none";
//   }
// });


