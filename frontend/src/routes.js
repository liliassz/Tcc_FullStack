import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o BrowserRouter e Routes
import HomeScreen from './screens/home'
import LoginScreen from './screens/auth/login'
import RegisterScreen from './screens/auth/register'
import UserEditScreen from './screens/users/edit'
import NotesScreen from './screens/notes/index'

const Rotas = () => (
    <Router>
        <Routes>
            <Route exact path='*' element={<HomeScreen />}/>
            <Route exact path='/login' element={<LoginScreen />}/>
            <Route exact path='/register' element={<RegisterScreen />}/>
            <Route exact path='/users/edit' element={<UserEditScreen />}/>
            <Route exact path='/notes' element={<NotesScreen />}/>
        </Routes>
    </Router>
);

export default Rotas;

