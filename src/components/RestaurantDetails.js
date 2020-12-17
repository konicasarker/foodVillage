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
import dishItems, { menuHeaders } from '../data/golpo'
import allResturantsDetails from '../data/combineRestraunts'

const DishDetails = (props) => {
    var data = dishItems.filter(item => props.value == 0 ? true :  props.value == item.dishId ).map(item => item.dishName)
    
    return (
        <div>
            {dishItems.filter(item => props.value == 0 ? true :  props.value == item.dishId ).map(item => {
                return (<div>
                    <h3>{item.dishName}</h3>
                    <div>
                        
                    </div>
                </div>)
            })}
        </div>
    )
}

export default function RestaurantDetails(props) {

    const [menuTab, setMenuTab] = useState(0)

    const handleMenu = (e, val) => {
        setMenuTab(val)
    }

    console.log('Index', menuTab)
    return (
        <div> 
            <div>
                <div> Restaurant name : {props.match.params.name} </div>
                <div> Info and Favourite</div>
                <div> Review-rating</div>
                <div> Restaurant info</div>
            </div>
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
            <DishDetails value={menuTab}/>
               

        </div>
    )   

}

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }