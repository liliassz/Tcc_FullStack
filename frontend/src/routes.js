import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o BrowserRouter e Routes
import HomeScreen from './screens/home'

const Rotas = () => (
    <Router>
        <Routes>
            <Route path='*' element={<HomeScreen />}/>
        </Routes>
    </Router>
);

export default Rotas;

