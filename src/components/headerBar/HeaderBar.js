import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./style.css"
import titleImage from '../../logo.png'
import logo2 from '../../logo-tr.png'


export default class HeaderBar extends Component {
    render(){
        return (
            <div>
                <div className="topbar">
                    <div className="topbar-logo-title">
                        <Link to='/'>
                            <div className='topbar-logo'> 
                                <img className="header-logo" src={logo2} alt="logo"/>
                            </div>
                        </Link>
                        <div className="topbar-title">  Food village </div> 
                </div> 
                <div className="topbar-location">  Berlin-Mitte, 10178 Berlin </div> 
                <div className="topbar-menu">  ---  </div> 
                </div>
                <div className="header-image-container">
                    <img src={titleImage} alt="Nature" className="responsive"></img>
                </div>
          </div>
        )
        
    }
}