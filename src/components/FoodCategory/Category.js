import React, {Component} from 'react';
import "./style.css"
const kitchenType = ["Italian", 
                     "Sushi", 
                     "Indian", 
                     "Vegetarian", 
                     "Dessets&Sweets", 
                    ]
export default class Category extends Component {
    render(){
        return (
            <div className="kitchenTypeWrapper">
                <div className="component-container">
                    <div className="category">
                        <div className="filter-kitchen">
                            <span className="kitchen">All</span>
                        </div>
                            {
                                kitchenType.map( (item, index) => {
                                return  <a key={index} tabIndex={index} className="filter-kitchen"  style={{ marginRight: "20px" }}>
                                            <span className="kitchen">{item}</span>
                                        </a>
                                })
                            }
                         <div className="filter-kitchen show_more">
                            <span className="kitchen">Show more</span>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }     

}
