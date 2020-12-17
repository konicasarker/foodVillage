import React, {Component} from 'react';
import "./style.css"

export default class Category extends Component {
    render(){
        return (
            <div className="category">
                <span style={{ marginRight: "20px" }}>All</span>
                <span style={{ marginRight: "20px" }}>Italian style Pizza</span>
                <span style={{marginRight: "20px" }}>Sushi</span>
                <span style={{marginRight: "20px" }}>Indian</span>
            </div>
        )  
    }     

}
