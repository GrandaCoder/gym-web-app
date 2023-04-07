import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, child, get,onValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'


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
const database = getDatabase(app);
//const db = getFirestore(app);
const analytics = getAnalytics(app);

const dbRef = ref(getDatabase());

const db = getDatabase();

// Get a reference to the users node
const usersRef = ref(db, 'cards');
onValue(usersRef, (snapshot) => {
  snapshot.forEach((child) => {
    const userData = child.val();
    console.log(userData.title, userData.videoId);
  });
});
// document.addEventListener("DOMContentLoaded", async () => {
//   const container = document.querySelector(".container");

//   // Obtener datos de Firebase
//   const querySnapshot = await db.collection("cards").get();

//   // Crear las cards
//   querySnapshot.forEach((doc) => {
//     const cardData = doc.data();

//     const card = document.createElement("div");
//     card.classList.add("card");

//     const title = document.createElement("h2");
//     title.classList.add("card-title");
//     title.textContent = cardData.title;

//     const description = document.createElement("p");
//     description.classList.add("card-description");
//     description.textContent = cardData.description;

//     const video = document.createElement("div");
//     video.setAttribute("id", "player");
//     video.setAttribute("data-plyr-provider", "youtube");
//     video.setAttribute("data-plyr-embed-id", cardData.videoId);

//     card.appendChild(title);
//     card.appendChild(description);
//     card.appendChild(video);
//     container.appendChild(card);

//     // Inicializar Plyr
//     const player = new Plyr(video);
//   });
// });
