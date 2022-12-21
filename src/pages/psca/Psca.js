import React from "react";
import {Outlet} from 'react-router-dom'


class Psca extends React.Component{
    render(){
        return (
            <div className="container">  
                <h1>Ps Chiffre d'affaires</h1>
                 <Outlet />
            </div>
        )
    }
}

export default Psca;