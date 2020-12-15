import React, {Component} from 'react';
import {connect} from 'react-redux';
import Restautant from './restaurant/RestaurantV2.js'
import {Link} from 'react-router-dom';
import "./style.css"

class RestaurantList extends Component {

    render(){
        console.log(this.props.allResturants.filter(item => item.show), 'data')
        return (
           <div> 
               <Link className="nav-link" to="/restaurantDetails">
                    <div> 
                        {this.props.allResturants.filter(item => item.show).map((item, index)=>{
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