import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Views
import App from './App';
import Inicio from './routes/Inicio';
import Experiencia from './routes/Experiencia';
import RefPersonal from './routes/RefPersonal';
import RefFamiliar from './routes/RefFamiliar';
import Estudios from './routes/Estudios';
import Portafolio from './routes/Portafolio';

import TallerVariables from './routes/TallerVariables';
import TallerCondicionales from './routes/TallerCondicionales';
import TallerCiclos from './routes/TallerCiclos';
import TallerArreglos from './routes/TallerArreglos';
import TallerFunciones from './routes/TallerFunciones';
import TallerJava from './routes/TallerJava';

import NoEncontrada from './routes/NoEncontrada';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="personal" element={<RefPersonal />} />
          <Route path="familiar" element={<RefFamiliar />} />
          <Route path="estudios" element={<Estudios />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="variables" element={<TallerVariables />} />
          <Route path="condicionales" element={<TallerCondicionales />} />
          <Route path="ciclos" element={<TallerCiclos />} />
          <Route path="arreglos" element={<TallerArreglos />} />
          <Route path="funciones" element={<TallerFunciones />} />
          <Route path="java" element={<TallerJava />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>        
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
