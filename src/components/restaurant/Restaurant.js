import React, {Component} from 'react';
import "./style.css"


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

        const { id, name, logo, reviews, category, deliveryCharge, deliveryTime, minOrder } = props.item;
        return (
          <Card className={classes.root}>
               <div className="logowrapper">
                   <div className="logo-n"> 
                        <img className="restaurant-logo" src={logo} alt="logo"/>
                   </div>  
                   <div className="review"> 
                        <div className="review-stars"> *****</div>
                   </div>                                  
                </div>

              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6" >
                    {name}
                  </Typography>
                  <Typography variant="display2" color="textSecondary">
                    <div>
                      {category.map(function(item, index) {
                        return <div key={index} className="item">{item}</div>;
                      })}
                    </div>
                  </Typography>
                </CardContent>

              </div>

            </Card>
          );
    }     