import React, {Component} from 'react';
import {connect} from 'react-redux';
import Restautant from './restaurant/RestaurantV2.js'
import {Link} from 'react-router-dom';
import "./style.css"

class RestaurantList extends Component {

    render(){
        return (
           <div> 
               <Link className="nav-link" to="/restaurantDetails">
                    <div> 
                        {this.props.allResturants.map((item, index)=>{
                            return  <Restautant key={index} item={item} />
                        })}
                    </div>
                </Link>
           </div>
        )  
    }     

}

const mapStateToProps = state => ({
    allResturants: state.restautantsList ? state.restautantsList : []
})

export default connect(mapStateToProps)(RestaurantList)