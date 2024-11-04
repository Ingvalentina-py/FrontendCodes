import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa correctamente desde react-dom/client
import App from './App.jsx';
import './index.css'; // Asegúrate de que este archivo exista

const container = document.getElementById('app'); // Obtén el contenedor
if (container) {
    const root = createRoot(container); // Crea la raíz
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("No se encontró el contenedor con id 'app'"); // Mensaje de error si no se encuentra
}
