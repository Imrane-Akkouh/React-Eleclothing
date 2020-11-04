import cartActionTypes from './cart-action.types';

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY,
})

export const addItem = (cartItem) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: cartItem
});

export const removeItem = (cartItem) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: cartItem
});

export const decreaseItemQuantity = (cartItem) => ({
    type: cartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: cartItem
});