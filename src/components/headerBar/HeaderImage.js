import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./headerBar.css"
import titleImage from '../../titleImage.jpg'


export default class HeaderImage extends Component {
    render(){
        return (
                <div className="header-image">
                    <img src={titleImage} alt="logo"/>
                </div>
        )
        
    }
}