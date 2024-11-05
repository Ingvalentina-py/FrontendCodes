// adminPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../App.css';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Inicializa useNavigate

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3500/api/admin/users');
                if (!response.ok) {
                    throw new Error('Error al obtener el historial de usuarios');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="admin-container">
            <h2>Historial de Registros</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/admin/login')}>Volver al Login Admin</button> {/* Botón para volver al login de administrador */}
        </div>
    );
};

export default AdminPage;
