import React, { Component } from "react";
import {Outlet} from 'react-router-dom'

import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
class App extends Component {
  constructor (props){
    super(props);
    this.state = {openMenu:false}
  }
  render () {
    const {openMenu} = this.state;
    return (
      <div className="App">
        <Header isSideMenu={this.state.openMenu} open={()=>{
          this.setState({openMenu:!openMenu})
        }}/>
        <SideMenu isSideMenu={this.state.openMenu}/>
        <div className="outlet" style={{left:openMenu?'280px':'60px'}}>
          <Outlet />
        </div>
        
      </div>
    )
  }
}


export default App;
