import React, {Component, useState } from 'react';
import dishItems, { menuHeaders } from '../../../data/golpo'
import "./style.css"

export default function  DishDetails (props) {
    var data = dishItems.filter(item => props.value == 0 ? true :  props.value == item.dishId ).map(item => item.dishName)
   // console.log("****** >>", data)
    return (
        <div>
            {dishItems.filter(item =>  props.value == 0 ? true :  props.value == item.dishId ).map(item => {
                return (
                  <div className="dish-wrapper">
                    <div className="dish-group-title-container">
                    <div className="dish-group-title-text"> {item.dishName} </div>
                    </div>
                    {item.dishItems.map(menuitem => {
                        return (
                            <div className="dish-detail-wrapper">
                                <div className="dish-detail">
                                    <span className="dish-name">{menuitem.menuName}</span>
                                    <div className="dish-additional-info"> {menuitem.details} </div>
                                    <div className="price"> {menuitem.price} €</div>
                                </div>  
                            </div> 
                        )
                    })}
  
                </div>)
            })}
        </div>
    )
}
