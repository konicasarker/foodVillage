import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestaurantList from '../RestaurantList';
import Filter from '../filter/Filter';
import HeaderImage from '../headerBar/HeaderImage';
import Category from '../FoodCategory/Category'
import "./style.css"

export default class GridNavPanel extends Component {

    render(){
        return (
            <nav className="mainPanel"> 
                <div className ="subNav">
                    <div className="btn-search"> Search </div>
                    <div className="btn-sort">  Sort </div>
                </div>
            </nav>
        )  
    }     

}
