import React, {Component} from 'react';
import CartAmount from './CartAmount';
import EmptyContent from './EmptyContent';
import MinOrderMsg from './MinOrderMsg';
import BasketButton from './BasketButton';
import BasketItem from './BasketItem';
import {connect} from 'react-redux';
import "./style.css"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEmpty: true
        };
      }

    render() {
        let isEmptyCart = 0;
        if(this.props.addedItems){
            isEmptyCart = this.props.addedItems.length
        }
        
        return (  
                <div className="basketContainer"> 
                    <BasketButton />
                    <div className="basket-container-scroller"> 
                    
                    { isEmptyCart <= 0 ? <EmptyContent/> : null }
                    { isEmptyCart > 0 ? <BasketItem items={this.props.addedItems}/> : null }

                    <CartAmount />
                    <MinOrderMsg />

                    <button className="order_button"> 
                        Order 
                    </button>
                    </div>
                </div>   
        )
    }
}

const mapStateToProps = state => ({
    addedItems: state.addedItems ? state.addedItems : [],
    total: state.total ? state.total : []
})

export default connect(mapStateToProps, null)(Cart)
