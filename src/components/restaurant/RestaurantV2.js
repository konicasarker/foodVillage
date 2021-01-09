import React, {Component} from 'react';
import "./styleV2.css"


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },    
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
  

export default function Restaurant(props) {

        const classes = useStyles();
        const theme = useTheme();

        const { id, name, logo, reviews, category, deliveryCharge, deliveryTime, minOrder } = props.item
        return (
          <>
            <div className="restaurant">
              <div className="logoWrapper"> 
                <div className="logo-n"> 
                  <img className="restaurant-logo" src={logo} alt="logo"/> 
                </div>  
              </div>
              <div className="detailsWrapper"> 
                <h2 className="restaurantName">{name}</h2>
                <div className="kitchens">
                      {category.map(function(item) {
                        return <div key={item.id} className="item">{item}</div>;
                      })}
                    </div>
                <div className="deliveryDetailsWrapper">
                  <div className="delivery">
                    <div className="delivery-time">{deliveryTime} min</div>
                    <div className="delivery-cost">Delivery charge: {deliveryCharge}€</div>
                    <div className="min-order">Min Order {minOrder}€ </div>
                  </div>
                </div>
              </div>
            </div>
          
          
          </>

        );
    }     
