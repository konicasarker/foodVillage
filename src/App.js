
import './App.css';

import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import MainRestaurantContainer from './components/gridcontainer/MainRestaurantContainer';
import RestaurantDetailContainer from './components/RestaurantDetailContainer';
import HeaderBar from './components/headerBar/HeaderBar'
import MyCart from './components/Cart/MyCartDetail'


import {restautantsList} from './data/restaurants'
import {filterOptions} from './data/filter'
import allResturantsDetails from './data/combineRestraunts'


import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updateRestaurantList(restautantsList)
    this.props.updateFilters(filterOptions)
    this.props.updateRestaurantDetails(allResturantsDetails)
  }

  render() {
    return (
    <React.Fragment>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={MainRestaurantContainer} />
        <Route exact path="/myCart" component={MyCart} />
        <Route path="/:name" component={RestaurantDetailContainer}/>
      </Switch>
      
    </React.Fragment>
    );
  }
 }

 const mapDispatchToProps = dispatch => {
   return {
     updateRestaurantList : (val) => dispatch({type: 'ADD_RESTAURANTS', payload: val}),
     updateFilters : (val) => dispatch({type: 'ADD_FILTERS', payload: val}),
     updateRestaurantDetails : (val) => dispatch({type: 'ADD_RESTAURANT_DETAILS', payload: val})
   }
 }


export default connect(null, mapDispatchToProps)(App);
