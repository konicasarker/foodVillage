import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import titleImage from '../../titleImage.jpg'

import "./style.css"
import titleImage from '../../logo.png'
//import logo2 from '../../logo-tr.png'


export default class HeaderImage extends Component {
    render(){
        return (            
                <div className="header-image-container">
                    <img src={titleImage} alt="Nature" className="responsive"></img>
                </div> 
        )        
    }
}