import React, { useState } from 'react';
import '../App.css'; // Asegúrate de importar el CSS
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const CodeCheckPage = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3500/api/code/check-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            });
            const data = await response.json();
            setResult(data.message);
        } catch (error) {
            console.error('Error al verificar el código:', error);
        }
    };

    const handleBack = () => {
        navigate('/loginPage'); // Redirige a la página de inicio de sesión
    };

    return (
        <div className="code-check-container">
            <h2>Verificación de Código</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingresa tu código"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Verificar</button>
            </form>
            {result && <p>{result}</p>}
            <button onClick={handleBack}>Volver</button> {/* Botón de Volver */}
        </div>
    );
};

export default CodeCheckPage;




