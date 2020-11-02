import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return (
    <div className="collection-item">
        <div className="image" style={{ background: `url(${imageUrl})`, backgroundRepeat: 'no-repeat' }}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
    </div>
    )

}

const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
