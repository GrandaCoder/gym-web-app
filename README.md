# Título del Proyecto: DemoFit 

Este es un ejemplo de una aplicación basada en Firebase que muestra una lista de recetas y una lista de videos de categorías y ejercicios. La aplicación utiliza el modelo de Firebase RTDB para almacenar y recuperar datos.

## Empezando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. 

### Prerrequisitos

Para ejecutar este proyecto en tu máquina local necesitas tener instalado Node.js, npm y Firebase CLI. También debes tener una cuenta de Firebase y configurar un nuevo proyecto. Puedes hacer esto a través de la [consola de Firebase](https://console.firebase.google.com/u/0/).

### Instalación

1. Clona este repositorio en tu máquina local.

```sh
git clone https://github.com/GrandaCoder/gym-web-app.git
```

2. Instala las dependencias del proyecto.

```sh
npm install
```

3. Configura tus credenciales de Firebase en `mains.js` y `category.js`.

```javascript
const firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<AUTH_DOMAIN>",
    databaseURL: "<DATABASE_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_SENDER_ID>",
    appId: "<APP_ID>",
    measurementId: "<MEASUREMENT_ID>"
};
```

### Ejecución

Para ejecutar la aplicación en un servidor local:

```sh
firebase serve
```

Navega a `http://localhost:5000` en tu navegador.

Para hacer deploy de la aplicación a Firebase:

```sh
firebase deploy
```

## Construido con

- [Firebase](https://firebase.google.com/) - Base de datos utilizada.
- [Plyr](https://plyr.io/) - Biblioteca para la reproducción de videos.
