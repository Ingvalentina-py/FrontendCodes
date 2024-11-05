// codesHistoryAdmin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const CodesHistoryAdmin = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <div className="codes/history/container">
            <h2>Historial de Códigos</h2>
            {/* Aquí puedes agregar la lógica para mostrar el historial de códigos */}
            <ul>
                <li>Código 1 - Ganador</li>
                <li>Código 2 - No ganador</li>
                {/* Agregar más códigos según sea necesario */}
            </ul>
            <button onClick={() => navigate('/')}>Volver al Login Usuario</button> {/* Botón para volver al login de usuario */}
        </div>
    );
};

export default CodesHistoryAdmin;

