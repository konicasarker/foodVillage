import React, {Component, useState } from 'react';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import allResturantsDetails from '../data/combineRestraunts'
import DishDetails from "./restaurant/Dish/DishDetails"
import RestaurantDetailsHeader from "./RestaurantDetailsHeader"


function RestaurantDetails(props) {

    const [menuTab, setMenuTab] = useState(0)
    const currRestaurantDetail = props.resturantsDishDetails.find(item => item.nameIdentifier == props.name)
  
    const updateDishItemToCart = (dishId, menuId) => {
         // filter here and fine the exact menu
        const restaurant = props.resturantsDishDetails.find(res => res.nameIdentifier===props.name).menus;
        const dish = restaurant.find(d => d.dishId===dishId).dishItems
        const menu = dish.find(m => m.menuid === menuId)
          
        let val = 
        {
            "menuId" : menuId, 
            "dishId" :dishId,
            "restaurantNameIdentifier" : props.name,
            "item" :  menu      
        }

        props.updateDishItem(val);
    }
    

    const handleMenu = (e, val) => {
        setMenuTab(val)
    }
  
    if(currRestaurantDetail){
        const {menuHeaders, menus, nameIdentifier} = currRestaurantDetail
        return (
            <div className="dishMaincontainer"> 
                <RestaurantDetailsHeader restaurantName={props.name}/>
                <AppBar position="sticky" color="default">
                    <Tabs
                    value={menuTab}
                    onChange={handleMenu}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                        {
                            menuHeaders.map((item, index) =>{
                            return <Tab key={index} label={item.menu} {...a11yProps(index)}/>
                        })
                        }
                    </Tabs>
                </AppBar>     
                <DishDetails value={menuTab} dishItems={menus} updateDishItemToCart={updateDishItemToCart}/>             
            </div>
        )   
    } else {
            return <> NO DATA AVAILABLE FOR THIS RESTAURANT</>
    }

}

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const mapStateToProps = state => ({
    resturantsDishDetails: state.restaurantDetails ? state.restaurantDetails : [],
    addedItems: state.addedItems ? state.addedItems : []
})

const mapDispatchToProps = dispatch => ({
    updateDishItem : (val) => { dispatch({
       type: 'UPDATE_DISH_ITEM',
       payload: val
    })}
 })

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails)