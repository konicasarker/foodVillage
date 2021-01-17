import React, {Component} from 'react';
import "./style.css"

export default class CartAmount extends Component {
    handleDeleteBtn = (dishId, menuId) => {
        console.log("From handle Delete button. id =", dishId, menuId)
        this.props.removeFromCart(dishId, menuId)
        
    }
    render() {

        return (  
                    <div className="products"> 
                     {
                         this.props.items.map((item, index) => {

                        return (<div className="cart-row" key={index}> 
                                 <span className="cart-meal-amount"> {item.quantity}x </span>
                                 <span className="cart-meal-name"> {item.menuName} </span>
                                 <div className="cart-meal-edit-buttons">  + -  </div>
                                 <span className="cart-meal-price"> {item.price} €</span>
                                 <button className="btn cart-meal-delete" 
                                    onClick = {()=> this.handleDeleteBtn(item.dishId, item.menuId)}><i className="fa fa-trash"></i>
                                </button>
                               </div>)
                                             
                        })
                     }                       
                    </div>
        )
    }
}