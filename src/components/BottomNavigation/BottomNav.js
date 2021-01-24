import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./style.css"

class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEmpty: true
        };
      }

    render() {
        let isEmptyCart = 0;
        let totalAmount = this.props.total
        let printmsg = "";
        printmsg = (totalAmount>0) ? `Basket (${this.props.total} €)` : "Order";
        
        return (  
                <div className="bottomContainer"> 
                    <button className="basket_button"> 
                        {printmsg}
                    </button>
                </div>   
        )
    }
}

const mapStateToProps = state => ({
    total: state.total ? state.total : [],
})



export default connect(mapStateToProps, null)(BottomNav)
