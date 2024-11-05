// registerAdmin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const RegisterAdmin = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <div className="register-container">
            <h2>Registrar Admin</h2>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrar</button>
            <br />
            <button onClick={() => navigate('/admin/login')}>Volver</button> {/* Botón para volver a login admin */}
        </div>
    );
};

export default RegisterAdmin;
