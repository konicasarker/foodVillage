import React, {Component} from 'react';
import "./style.css"

export default class CartAmount extends Component {
    render() {
        
        return (  
                    <div className="products"> 
                     {
                         this.props.items.map((item, index) => {

                        return (<div className="cart-row" key={index}> 
                                 <span className="cart-meal-amount"> {item.quantity}x </span>
                                 <span className="cart-meal-name"> {item.menuName} </span>
                                 <div className="cart-meal-edit-buttons">  + -  </div>
                                 <span className="cart-meal-price"> {item.price} </span>
                                 <button className="cart-meal-delete"> del </button>
                               </div>)
                                             
                        })
                     }                       
                    </div>
        )
    }
}