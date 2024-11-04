import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Asegúrate de importar el CSS

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const data = { name, lastName, email, password };

        try {
            const response = await fetch('http://localhost:3500/api/auth/register', {
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
            setSuccessMessage('Usuario registrado exitosamente');
            console.log('Registro exitoso:', result);
        } catch (error) {
            setErrorMessage('Error de conexión con el servidor');
            setSuccessMessage('');
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleRegister}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>
                <br />
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
                <button type="submit">Registrarse</button>
            </form>
            <hr />
            <button onClick={() => navigate('/')}>Volver</button>
        </div>
    );
};

export default RegisterPage;




