import React, {Component, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import dishItems, { menuHeaders } from '../data/golpo'
import allResturantsDetails from '../data/combineRestraunts'
import DishDetails from "./restaurant/Dish/DishDetails"
import RestaurantDetailsHeader from "./RestaurantDetailsHeader"

// const DishDetails2 = (props) => {
//     var data = dishItems.filter(item => props.value == 0 ? true :  props.value == item.dishId ).map(item => item.dishName)
    
//     return (
//         <div>
//             {dishItems.filter(item => props.value == 0 ? true :  props.value == item.dishId ).map(item => {
//                 return (<div>
//                     <h3>{item.dishName}</h3>
//                     <div>
                        
//                     </div>
//                 </div>)
//             })}
//         </div>
//     )
// }

export default function RestaurantDetails(props) {

    const [menuTab, setMenuTab] = useState(0)

    const handleMenu = (e, val) => {
        setMenuTab(val)
    }

    //console.log('+++++++ ALL RESTAURANT DETAILS +++++++', allResturantsDetails)
    const currRestaurantDetail = allResturantsDetails.find(item => item.nameIdentifier == props.match.params.name)
    //console.log('+++++++ ALL RESTAURANT DETAILS +++++++', currRestaurantDetail)
    
    
    if(currRestaurantDetail){
        const {menuHeaders, menus} = currRestaurantDetail

    return (
        <div> 
            <RestaurantDetailsHeader restaurantName={props.match.params.name}/>
            <AppBar position="static" color="default">
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
    }else {
            return <> NO DATA AVAILABLE FOR THIS RESTAURANT</>
    }


}

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }