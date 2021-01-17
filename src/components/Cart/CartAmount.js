import React, {Component} from 'react';
import "./style.css"

export default class CartAmount extends Component {
    render() {
        //{subTotal, deliveryCost } = this.props;
        const total = this.props.subTotal + this.props.deliveryCost;

        return (  
                    <div className="cart-amount"> 
                        <div className="cart-row"> 
                            <span className="cart-row-name"> Sub-total </span>
                            <span className="cart-row-price"> {this.props.subTotal} €</span>
                         </div>
                         <div className="cart-row"> 
                            <span className="cart-row-name"> Delivery Cost </span>
                            <span className="cart-row-price"> {this.props.deliveryCost} €</span>
                         </div>
                         <div className="cart-row cart-total"> 
                            <span className="cart-row-name"> Total </span>
                            <span className="cart-row-price"> {total} €</span>
                         </div>
                    </div>
        )
    }
}