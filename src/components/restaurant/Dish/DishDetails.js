import { MenuItem } from '@material-ui/core';
import React, {Component, useState } from 'react';
import DishItem from "./DishItem"
import "./style.css"


export default class  DishDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
  
    addToCart = (menuId, dishId) => {
        this.props.updateDishItemToCart(menuId, dishId)
    }

    render(){
            return (
                <div>
                    {  this.props.dishItems.filter(item =>  this.props.value == 0 ? true :  this.props.value == item.dishId ).map((item, index) => {
                        return (
                        <div className="dish-wrapper" key={index}>
                            <div className="dish-group-title-container">
                            <div className="header-img-container"> 
                                <img src={item.dishHeaderImage} alt="dish-group-img"/> 
                            </div>  
                            <div className="dish-group-title-text"> {item.dishName} </div>
                        </div>
                            {item.dishItems.map((menuItem, index) => {
                                return <DishItem key={index} item={menuItem} dishId={item.dishId} addToCart={this.addToCart} />
                            })}
        
                        </div>)
                    })}
                </div>
            )
     }
}
