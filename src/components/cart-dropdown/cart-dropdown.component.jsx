import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}></CartItem>
            )): <span className="empty-cart-message">Cart Is Empty</span>}
        </div>
        <CustomButton onClick={()=> { 
            dispatch(toggleCartVisibility());
            history.push("/checkout");
        }}>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));