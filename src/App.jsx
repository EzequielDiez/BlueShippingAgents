import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Puertos from './components/Puertos';
import Contacto from './components/Contacto';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/puertos" element={<Puertos />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}

export default App; 