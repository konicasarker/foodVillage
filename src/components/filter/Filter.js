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
         tempRestaurantList : [],
         orderValIdentifier: 1,
         deliveryValIdentifier: 1,
      }
  }

  filterByDeliveryCharge = (filterValue) => {
   let filteredResList = filterValue == 0 ? 
                              this.props.restautantsList.map(item => ({...item, show: true})) : 
                              this.props.restautantsList.map(res=> res.deliveryCharge <= filterValue ? 
                                                                     ({...res, show: true}) : 
                                                                     ({...res, show: false }))

     this.props.updateList(filteredResList)
}


   filterByMinOrder = (filterValue) => {
      let filteredResList = filterValue == 0 ? this.props.restautantsList.map(item => ({...item, show: true})) : 
                     this.props.restautantsList.map(res => res.minOrder <= filterValue ? ({...res, show: true}) : ({...res, show: false}))
     
      this.props.updateList(filteredResList)
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
     //this.updateFilterCheckedOption(filter, filterOption)
      if(filter.name==="order_amount"){
         this.filterByMinOrder(filterValue.value)
      }else if(filter.name==="delivery_cost"){
         this.filterByDeliveryCharge(filterValue)
      }
   }


   updateIdentifier = (identifier, value, id) => {
      if(id == 1) {
         this.setState({ orderValIdentifier: identifier })
         this.filterByMinOrder(value)
      } else {
         this.setState({ deliveryValIdentifier: identifier})
         this.filterByDeliveryCharge(value)
      }
   }

    render(){
        const filterOptions = this.props.filterOptions
        return(
           <div>
             <div>
                Title
                <div> Title</div>  
                <div> Title</div>  
             </div> 
             <nav> navigation
               <div> </div>
               <div>
                  <button> Button 1</button> 
                  <button> Button 1</button> 
               </div>
             </nav>     
            <div>
                  { 
                     filterOptions.map((item, index)=>{
                        return <FilterCard key={index} 
                                       deliveryValIdentifier={this.state.deliveryValIdentifier} 
                                       orderValIdentifier={this.state.orderValIdentifier} 
                                       filterOptions={item} 
                                       getFilter={this.getFilter} 
                                       updateIdentifier={this.updateIdentifier}
                                       filterByDeliveryCharge={this.filterByDeliveryCharge} 
                                       filterByMinOrder={this.filterByMinOrder}/>
                     })
                  }
               </div>  
         </div>   
        )  
    }     

}

const mapDispatchToProps = dispatch => ({
   updateList : (val) => { dispatch({
      type: 'EDIT_DISH_ITEM',
      payload: val
   })}
})

const mapStateToProps = state => ({
   filterOptions: state.filterOptions ? state.filterOptions : [],
   restautantsList: state.restautantsList ? state.restautantsList : []
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)