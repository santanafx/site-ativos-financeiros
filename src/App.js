import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Grafico } from './pages/Grafico';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/grafico/:id' element={<Grafico />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
