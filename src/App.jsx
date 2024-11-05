import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import CodeCheckPage from './pages/codeCheckPage';
import LoginAdmin from './pages/loginAdmin'; // Nueva página de Login Admin
import RegisterAdmin from './pages/registerAdmin'; // Nueva página de Register Admin
import CodesHistoryAdmin from './pages/codesHistoryAdmin'; // Nueva página de historial de códigos

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/check-code" element={<CodeCheckPage />} />
                <Route path="/admin/login" element={<LoginAdmin />} /> {/* Nueva ruta */}
                <Route path="/admin/register" element={<RegisterAdmin />} /> {/* Nueva ruta */}
                <Route path="/admin/codes-history" element={<CodesHistoryAdmin />} /> {/* Nueva ruta */}
            </Routes>
        </Router>
    );
};

export default App;
