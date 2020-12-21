import React, {Component} from 'react';

import "./style.css"

export default class DishItem extends Component {

    render(){
        return (
            <div className="dish-detail-wrapper">
                <div className="dish-detail">
                    <span className="dish-name">{this.props.item.menuName}</span>
                    <div className="dish-additional-info"> {this.props.item.details} </div>
                    <div className="price"> {this.props.item.price} €</div>
                </div> 
                <div>Add icon</div>
            </div> 
        )
    }     

}
