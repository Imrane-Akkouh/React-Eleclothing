import React from 'react';
import {connect} from 'react-redux';

import {removeItemStart, addItemStart, decreaseItemQuantityStart} from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({item, removeItem, addItem, decreaseItemQuantity})=>(
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item"/>
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>decreaseItemQuantity(item)}>&#10094;</div>
            <span className="value">{item.quantity}</span>
            <div className="arrow" onClick={()=>addItem(item)}>&#10095;</div>
        </span>
        <span className="price">${item.price}</span>
        <div className="remove" onClick={()=>removeItem(item)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem=> dispatch(removeItemStart(cartItem)),
    addItem: cartItem=> dispatch(addItemStart(cartItem)),
    decreaseItemQuantity: cartItem=> dispatch(decreaseItemQuantityStart(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);