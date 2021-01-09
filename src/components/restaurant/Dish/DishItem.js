import React, {Component} from 'react';
import AddIcon from '@material-ui/icons/Add';

import "./style.css"


const addToCart = () => {
    console.log("============= here is the onclick handler from div ==========")
}
export default class DishItem extends Component {


    render(){
        return (
            <>
                <div className="dishfullRow">
                    <div className="dish-detail-wrapper">
                            <div className="dish-contents">
                                <div className="dish-detail">
                                    <span className="dish-name">{this.props.item.menuName}</span>
                                    <div className="dish-additional-info"> {this.props.item.details} </div>
                                    <div className="price"> {this.props.item.price} €</div>
                                </div> 
                                <div className="add-to-cart" onClick={addToCart}> 
                                    <div className="icon-item">    
                                    <AddIcon />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }     

}
