import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import "./style.css"

export default class DishItem extends Component {

    render(){
        return (
            <>
                <div className="dish-detail-wrapper">
                    <Grid container>
                        <Grid item xs={10}>
                                <div className="dish-detail">
                                    <span className="dish-name">{this.props.item.menuName}</span>
                                    <div className="dish-additional-info"> {this.props.item.details} </div>
                                    <div className="price"> {this.props.item.price} €</div>
                                </div> 
                        </Grid>
                        <Grid item xs={2}>
                            <div>Add icon</div>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }     

}
