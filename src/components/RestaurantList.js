import React, {Component} from 'react';
import {connect} from 'react-redux';
import Restautant from './restaurant/Restaurant.js'

class RestaurantList extends Component {


    //state = {flag : true}

    render(){
        console.log("============= restaurant List ====",this.props)
        return (
           <div> 
               <h1> This is Restaurant list </h1>
                <div> 
                    {this.props.allResturants.map((item, index)=>{
                         return <Restautant key={index} item={item} />
                    })}
                </div>
           </div>
        )  
    }     

}

const mapStateToProps = state => ({
    allResturants: state.restautantsList ? state.restautantsList : []
})

export default connect(mapStateToProps)(RestaurantList)