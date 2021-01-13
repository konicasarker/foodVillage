import React, {Component} from 'react';
import "./style.css"

export default class CartAmount extends Component {
    render() {
        return (  
                    <div className="cart-amount"> 
                        <div className="cart-row"> 
                            <span className="cart-row-name"> Sub-total </span>
                            <span className="cart-row-price"> 0,00 $</span>
                         </div>

                         <div className="cart-row cart-total"> 
                            <span className="cart-row-name"> Total </span>
                            <span className="cart-row-price"> 0,00 $</span>
                         </div>
                    </div>
        )
    }
}