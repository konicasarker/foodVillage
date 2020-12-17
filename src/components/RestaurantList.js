import React, {Component} from 'react';
import {connect} from 'react-redux';
import Restautant from './restaurant/RestaurantV2.js'
import {Link} from 'react-router-dom';
import "./style.css"

class RestaurantList extends Component {

    render(){
        return (
           <div> 
                    <div> 
                        {this.props.allResturants.filter(item => item.show).map((item, index)=>{
                            return (<Link key={index} className="nav-link" to={`/${item.nameIdentifier}`}>
                                        <Restautant key={index} item={item} />
                                    </Link>)
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