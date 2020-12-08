import React, {Component} from 'react';
import FilterCard from './FilterCard'
import {connect} from 'react-redux';
import "./style.css"

class Filters extends Component {
    render(){
       const filterOptions = this.props.filterOptions
        return(
           <div>
               { 
                  filterOptions.map((item, index)=>{
                     return <FilterCard key={index} item={item} />
                  })
               }
            </div>     
        )  
    }     

}


const mapStateToProps = state => ({
   filterOptions: state.filterOptions ? state.filterOptions : []
})

export default connect(mapStateToProps)(Filters)