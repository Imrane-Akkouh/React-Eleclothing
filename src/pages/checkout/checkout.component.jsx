import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import './checkout.style.scss';

const Checkout = ({cartItems, total}) =>(
    <div className="checkout">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Name</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} item={cartItem}></CheckoutItem>
            ))
        }
        <div className="total"><span>Total: ${total}</span></div>
        <div className="test-warning">
            * Please Use The Following Input Informations For testing : *
            <br/>
            4242 4242 4242 4242 - Exp: any furtur date - CVC: any number
        </div>
        <StripeButton price={total}></StripeButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);