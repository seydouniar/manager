import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import App from './App';

import Psca from './pages/psca/Psca';
import Psrh from './pages/Psrh';
import Annee from "./pages/psca/Annee";
import Client from "./pages/psca/Client";
import Mois from "./pages/psca/Mois";
import Zone from "./pages/psca/Zone";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route className="container" path='/' element={<App />} >
        <Route path='/psca' element={<Psca />}>
        <Route path='/psca/annee' element ={<Annee />} />
          <Route path='/psca/client' element ={<Client />} />
          <Route path='/psca/mois' element ={<Mois />} />
          <Route path='/psca/zone' element ={<Zone />} />
        </Route>
        <Route path='/psrh' element ={<Psrh />} />

      </Route> 
    </Routes>
  </BrowserRouter>
);

