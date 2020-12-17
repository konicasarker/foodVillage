import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const menuItems = ["Popular dishes", "soup", "Vegetarian dishes", "Meat Items", "Fish items", "Cakes/Bakings", "sweet and snacks", "Drinks"];


export default class RestaurantDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rest: [
                {
                    name: "Random Name #1",
                    description: "Probably the most random thing you have ever seen!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                },
                {
                    name: "Random Name #2",
                    description: "Hello World!"
                }
            ]
        }
    }

    render(){
        console.log("GOLPO ITEMS + " , menuItems)
        return (
           <div> 
               <div>
                   <div> Restaurant name : {this.props.match.params.name} </div>
                   <div> Info and Favourite</div>
                   <div> Review-rating</div>
                   <div> Restaurant info</div>
               </div>
                <AppBar position="static" color="default">
                    <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                        {
                            menuItems.map((item, index) =>{
                                return <Tab key={index} label={item} {...a11yProps(index)}/>
                        })
                        
                        }
                        {/* <Tab label="Item One" {...a11yProps(0)} abcd />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} /> */}
                    </Tabs>
                </AppBar>     
               
               <div> Menu Card </div>    

           </div>
        )  
    }     

}

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }