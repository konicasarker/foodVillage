import React, {Component} from 'react';
import AddIcon from '@material-ui/icons/Add';

import "./style.css"

export default class DishItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : '',
        }
    }
    // handleDivClicked = ev => {
    //     const menuId = ev.currentTarget.dataset.menu_id;
    //     const dishId = ev.currentTarget.dataset.dish_id;

    //     console.log(`Div ${ev.currentTarget.dataset.div_id} clicked`)
    //     console.log(`Div ${ev.currentTarget.dataset.dish_id} clicked`)
    //     this.props.addToCart(dishId, menuId);
    //   };

      handleClick = (dishId, menuId) => {
          return this.props.addToCart(dishId, menuId)
      }

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
                                    <div className="add-to-cart" onClick={() => {this.handleClick(this.props.dishId, this.props.item.menuid)}}> 
                                    <div className="icon-item">    
                                    <AddIcon />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/* <div onClick={() => { this.onClickTest(this.props.item.menuid)}} >
                    hello click me here
               </div> */}
            </>
        )
    }     

}
