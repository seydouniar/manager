import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import App from './App';
import Psca from './pages/Psca';
import Psrh from './pages/Psrh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route className="container" path='/' element={<App />} >
        <Route path='/psca' element={<Psca />} />
        <Route path='/psrh' element ={<Psrh />} />
      </Route> 
    </Routes>
  </BrowserRouter>
);

