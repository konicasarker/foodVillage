import React, {Component} from 'react';
import {connect} from 'react-redux';

class RestaurantList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            RestaurantList : []  
        }

    }

    render(){
        console.log("============= restaurant details ====",this.state.RestaurantList)
        return (
           <div> 
               <h1> This is Restaurant list </h1>
                <div> </div>
           </div>
        )  
    }     

}

const mapStateToProps = state => ({
    RestaurantList: state.RestaurantList ? state.RestaurantList : []
})

export default connect(mapStateToProps)(RestaurantList)