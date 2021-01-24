import React, {Component} from 'react';
import CartAmount from './CartAmount';
import EmptyContent from './EmptyContent';
import MinOrderMsg from './MinOrderMsg';
import BasketButton from './BasketButton';
import BasketItem from './BasketItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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

        const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
        ? <Link to={to}>{children}</Link>
        : <>{children}</>;
          
        const currRestaurantInfo = this.props.restautantsList.filter(item => item.nameIdentifier === this.props.name)
        
        return (  
                <div className="basketContainer"> 
                    <BasketButton />
                    <div className="basket-container-scroller"> 
                    
                    { isEmptyCart <= 0 ? <EmptyContent/> : null }
                    { isEmptyCart > 0 ? <BasketItem items={this.props.addedItems}  removeFromCart={this.props.removeDishItemFromCart}/> : null }

                    <CartAmount 
                        subTotal={this.props.total} 
                        deliveryCost={currRestaurantInfo[0]?.deliveryCharge}
                    />
                    <MinOrderMsg />
                     
                     <ConditionalLink to="/cart" condition={this.props.total > 10}>
                        <button className={this.props.total <= 10 ? 'order_button' : 'order_button enabled'} > 
                                Order 
                        </button>                     
                     </ConditionalLink>

                    </div>
                </div>   
        )
    }
}

const mapStateToProps = state => ({
    addedItems: state.addedItems ? state.addedItems : [],
    total: state.total ? state.total : [],
    restautantsList: state.restautantsList ? state.restautantsList : []
})

const mapDispatchToProps = dispatch => ({
    removeDishItemFromCart : (dishId, menuId) => { dispatch({
       type: 'DELETE_DISH_ITEM_FROM_CART',
       payload: {dishId, menuId}
    })}
 })

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
