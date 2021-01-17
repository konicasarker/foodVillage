import React, {Component, useState } from 'react';
import Cart from "./Cart/Cart"
import "./style.css"
import RestaurantDetails from './RestaurantDetails';

export default function  RestaurantDetailContainer (props) {
    return (
        <div className="restaurantMainContainer">
            <RestaurantDetails name = {props.match.params.name} />
            <Cart name = {props.match.params.name}/>
        </div>
    )
}
