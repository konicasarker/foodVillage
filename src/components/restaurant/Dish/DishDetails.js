import { MenuItem } from '@material-ui/core';
import React, {Component, useState } from 'react';
import DishItem from "./DishItem"
import "./style.css"

export default function  DishDetails (props) {
    return (
        <div>
            {  props.dishItems.filter(item =>  props.value == 0 ? true :  props.value == item.dishId ).map(item => {
                return (
                  <div className="dish-wrapper">
                    <div className="dish-group-title-container">
                    <div className="header-img-container"> 
                        <img src={item.dishHeaderImage} alt="dish-group-img"/> 
                    </div>  
                    <div className="dish-group-title-text"> {item.dishName} </div>
                   </div>
                    {item.dishItems.map(menuItem => {
                        return <DishItem item={menuItem}/>
                    })}
  
                </div>)
            })}
        </div>
    )
}
