// loginAdmin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const LoginAdmin = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <div className="login-container">
            <h2>Login Admin</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button>Iniciar Sesión</button>
            <br />
            <button onClick={() => navigate('/admin/register')}>Registrarse Administrador</button> {/* Botón para registrarse */}
        </div>
    );
};

export default LoginAdmin;
