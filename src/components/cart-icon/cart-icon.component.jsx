import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartVisibility, itemsCount}) => (
    <div className="cart-icon" onClick={toggleCartVisibility}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())  
})

const mapStateToProps = (state) =>({
    itemsCount: selectItemsCount(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);