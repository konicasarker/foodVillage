
import './App.css';

import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import GridContainer from './components/gridcontainer/GridContainer';
import RestaurantDetails from './components/RestaurantDetails';
import HeaderBar from './components/headerBar/HeaderBar'
import Category from './components/FoodCategory/Category'
import {restautantsList} from './data/restaurants'
import {filterOptions} from './data/filter'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updateRestaurantList(restautantsList)
    this.props.updateFilters(filterOptions)
  }

  render() {
    console.log("From app js")
    console.log(this.props.RestaurantList)
    return (
    <React.Fragment>
      <HeaderBar />
      <Category />
      <Switch>
        <Route exact path="/" component={GridContainer} />
        <Route path="/:name" component={RestaurantDetails}/>
      </Switch>
    </React.Fragment>
    );
  }
 }

 const mapDispatchToProps = dispatch => {
   return {
     updateRestaurantList : (val) => dispatch({type: 'ADD_RESTAURANTS', payload: val}),
     updateFilters : (val) => dispatch({type: 'ADD_FILTERS', payload: val})
   }
 }


export default connect(null, mapDispatchToProps)(App);
