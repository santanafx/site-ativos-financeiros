import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
