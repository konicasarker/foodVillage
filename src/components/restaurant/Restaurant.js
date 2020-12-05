import React, {Component} from 'react';
import "./style.css"

export default class Restaurant extends Component {
    render(){
        const { id, name, logo, reviews, category, deliveryCharge, deliveryTime, minOrder } = this.props.item;
        console.log("============= restaurant ====", logo)
        return (
           <div className='restaurantRowItem'> 
                <div className='logoContainer'>  
                    <img className="restaurant-logo" src={logo} alt="logo"/>
                </div>
                <div className='detailsContainer'> Details  </div>
           </div>
        )  
    }     

}
