// loginpage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Asegúrate de importar el CSS

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const data = { email, password };

        try {
            const response = await fetch('http://localhost:3500/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                setErrorMessage(result.message || 'Error en la solicitud');
                setSuccessMessage('');
                return;
            }

            setErrorMessage('');
            setSuccessMessage('Login exitoso');
            console.log('Login exitoso:', result);
            navigate('/check-code');
        } catch (error) {
            setErrorMessage('Error de conexión con el servidor');
            setSuccessMessage('');
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="welcome-text">¡Bienvenidos!</h2>
            <h2 className="welcome-text">¡Margarita te premia!</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Iniciar sesión</button>
            </form>
            <hr />
            <button onClick={() => navigate('/register')}>Registrarse</button>
            <br />
            <button onClick={() => navigate('/admin/login')}>Iniciar Sesión Administrador</button> {/* Botón para ir a login admin */}
        </div>
    );
};

export default LoginPage;
