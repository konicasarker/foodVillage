import React from 'react';
import "./style.css"

function BasketButton () {
    return (
            <div className="basket-button"> 
                <div className="basket-button-icon"> </div>
                <p className="basket-button-label"> 
                    <span>Basket</span>
                </p>
            </div> 
    )
}

export default BasketButton;