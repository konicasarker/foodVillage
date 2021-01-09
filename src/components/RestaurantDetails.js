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

    const handleMenu = (e, val) => {
        setMenuTab(val)
    }

    const currRestaurantDetail = props.resturantsDishDetails.find(item => item.nameIdentifier == props.match.params.name)
    
    if(currRestaurantDetail){
        const {menuHeaders, menus} = currRestaurantDetail
        return (
            <div> 
                <RestaurantDetailsHeader restaurantName={props.match.params.name}/>
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
                <DishDetails value={menuTab} dishItems={menus} />             
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
    resturantsDishDetails: state.restaurantDetails ? state.restaurantDetails : []
})

export default connect(mapStateToProps)(RestaurantDetails)