import React from "react";
import {Outlet} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Annee from "./Annee";
import Client from "./Client";
import Mois from "./Mois";
import Zone from "./Zone";


class Psca extends React.Component{
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path='/psca/annee' element ={<Annee />} />
                        <Route path='/psca/client' element ={<Mois />} />
                        <Route path='/psca/mois' element ={<Client />} />
                        <Route path='/psca/zone' element ={<Zone />} />
                    </Routes>
                </BrowserRouter>
                 
            </div>
        )
    }
}

export default Psca;