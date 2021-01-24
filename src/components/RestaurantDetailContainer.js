import React, {Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from "./Cart/Cart"
import BottomNav from "./BottomNavigation/BottomNav"
import "./style.css"
import RestaurantDetails from './RestaurantDetails';

export default function  RestaurantDetailContainer (props) {
    return (
        <div className="restaurantMainContainer">
            <RestaurantDetails name = {props.match.params.name} />
            <Cart name = {props.match.params.name}/>
            <Link to="/myCart"> <BottomNav /> 
            </Link>

        </div>
    )
}
