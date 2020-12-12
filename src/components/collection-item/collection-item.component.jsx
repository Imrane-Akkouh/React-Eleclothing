import React from 'react';
import {connect} from 'react-redux';

import {CustomButtonContainer, CollectionItemContainer} from './collection-item.style';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.style.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item;
    return (
    <CollectionItemContainer>
        <div className="image" style={{ background: `url(${imageUrl})`, backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}}></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButtonContainer inverted onClick={()=>addItem(item)}>Add To Cart</CustomButtonContainer>
    </CollectionItemContainer>
    )

}

const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
