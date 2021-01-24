import React, {Component} from 'react';
import "./style.css"

function MyCartDetail (props) {
    const isEmptyCart = 2;
    if(isEmptyCart){
        return (
            <> THERE IS CONTENT abcd
            HELLO HELLO<br/>
            PRINT THIS
            </>
        )
    } else{
        return (
            <div className="basket-content"> 
            <i className="fas fa-shopping-basket mycss"></i>
                <span className="empty-order-msg"> 
                    Add some tasty food from the menu and place your order.
                </span>
            </div>
        )
    }
    
}

export default MyCartDetail;