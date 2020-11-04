import React from 'react';

import './checkout-item.style.scss';

const CheckoutItem = ({item})=>(
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item"/>
        </div>
        <div className="name">{item.name}</div>
        <div className="quantity">{item.quantity}</div>
        <div className="price">${item.price}</div>
        <div className="remove">&#10005;</div>
    </div>
)

export default CheckoutItem;