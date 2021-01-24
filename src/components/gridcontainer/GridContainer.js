import React, {Component} from 'react';
import RestaurantList from '../RestaurantList';
import Filter from '../filter/Filter';
import GridNavPanel from '../GridPanel/GridNavPanel';

import "./style.css"

export default class GridContainer extends Component {

    render(){
        return (
            <>
            <GridNavPanel />
            <div className="grid-container"> 
                <div className="grid-filter"> <Filter /> </div>
                <div className="grid-restaurantList"> <RestaurantList /> </div>
            </div>
           </>
        )  
    }     

}
