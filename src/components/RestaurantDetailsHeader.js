import React, {Component} from 'react';
import "./style.css"

export default class RestaurantDetailsHeader extends Component {

    render(){
        return (
            <div>
                <div> Restaurant name : {this.props.restaurantInfo.name} </div>
                <div> Info and Favourite</div>
                <div> Review-rating</div>
                <div> Restaurant info</div>
            </div>
        )  
    }     

}

