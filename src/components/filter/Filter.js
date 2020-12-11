import React, {Component} from 'react';
import FilterCard from './FilterCard'
//import FilterCard from './FilterCard_static'
import {connect} from 'react-redux';
import "./style.css"
import {restautantsList as rsl} from '../../data/restaurants'

class Filters extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tempRestaurantList : []
      }
  }

  filterByDeliveryCharge = (filterValue) => {
   console.log(" checking filter value = ", filterValue)
   let filteredResList = []

   if(filterValue.option === "No preference" && filterValue.value==0) {
      console.log(rsl)
      this.props.updateList(rsl)
   }else{
      this.props.updateList(rsl)
      filteredResList = this.props.restautantsList.filter(res => res.deliveryCharge <= filterValue.value)
      this.props.updateList(filteredResList)
   }
}


   filterByMinOrder = (filterValue) => {
      console.log(" checking filter value = ", filterValue)
      let filteredResList = []

      if(filterValue==0) {
         console.log(rsl)
         this.props.updateList(rsl)
      }else{
         filteredResList = this.props.restautantsList.filter(res => res.minOrder <= filterValue)
         this.props.updateList(filteredResList)
      }
   }

  updateFilterCheckedOption = (filter, optionValue) => {
     const resultFilter = filter.options.map(item => {
       if(item.option==optionValue){
          item.selected = "true"
       }else {
          item.selected = "false"
       }
       return item
     })
     return resultFilter
  }


  getFilter = (filterName, filterOption) => {     
     const filter = this.props.filterOptions.find(item => item.name === filterName)
     
     const filterValue = filter.options.find(item => item.option===filterOption)
     this.updateFilterCheckedOption(filter, filterOption)
      if(filter.name==="order_amount"){
         this.filterByMinOrder(filterValue.value)
      }else if(filter.name==="delivery_cost"){
         this.filterByDeliveryCharge(filterValue)
      }
   }


    render(){
        const filterOptions = this.props.filterOptions
        return(
           <div>
               { 
                  filterOptions.map((item, index)=>{
                     return <FilterCard key={index} item={item} getFilter={this.getFilter} filterByDeliveryCharge={this.filterByDeliveryCharge} filterByMinOrder={this.filterByMinOrder}/>
                  })
               }
            </div>     
        )  
    }     

}

const mapDispatchToProps = dispatch => ({
   updateList : (val) => { dispatch({
      type: 'UPDATE_LIST',
      payload: val
   })}
})

const mapStateToProps = state => ({
   filterOptions: state.filterOptions ? state.filterOptions : [],
   restautantsList: state.restautantsList ? state.restautantsList : []
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)