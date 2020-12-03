import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./headerBar.css"
import logo from '../../logo.svg'
import logo2 from '../../logo-tr.png'


export default class HeaderBar extends Component {
    render(){
        return (
            <div className="topbar">
                <Link to='/'>
                    <div className='topbar-logo'> 
                        <img src={logo2} alt="logo"/>
                    </div>
                </Link>
               <div className="topbar-title">  Food village </div> 
               <div className="topbar-location">  Berlin-Mitte, 10178 Berlin </div> 
               <div className="topbar-menu">  -  </div> 
              </div>

        )
        
    }
}