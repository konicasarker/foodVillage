import React, {Component} from 'react';
import {connect} from 'react-redux';
import RestaurantList from '../RestaurantList';
import Filter from '../filter/Filter';
import "./style.css"

export default class Gridcontainer extends Component {


    //state = {flag : true}

    render(){
        return (
           <div className="grid-container"> 
               <Filter />
               <RestaurantList />
           </div>
        )  
    }     

}
