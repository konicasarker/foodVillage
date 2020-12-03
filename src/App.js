
import './App.css';

import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import HeaderBar from './components/headerBar/HeaderBar'
import {restautantsList} from './data/restaurants'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updateRestaurantList(restautantsList)
  }

  render() {
    return (
    <React.Fragment>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={RestaurantList} />
        <Route path="/restaurantName" component={RestaurantDetails}/>
      </Switch>
    </React.Fragment>
    );
  }
 }

 const mapDispatchToProps = dispatch => {
   return {
     updateRestaurantList : (val) => dispatch({type: 'ADD_RESTAURANTS', payload: val})
   }
 }


export default connect(null, mapDispatchToProps)(App);
