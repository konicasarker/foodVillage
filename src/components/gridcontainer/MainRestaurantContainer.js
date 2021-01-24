import React, {Component} from 'react';
import HeaderImage from '../headerBar/HeaderImage';
import Category from '../FoodCategory/Category'
import GridContainer from './GridContainer'
import "./style.css"

export default class MainRestaurantContainer extends Component {

    render(){
        return (
            <>
            <HeaderImage />
            <Category />
            <GridContainer />
           </>
        )  
    }     

}
