import React, {Component} from 'react';
import "./style.css"

function EmptyContent (props) {
    if(props.isEmptyCart){
        return (<> THERE IS CONTENT </>)
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

export default EmptyContent;