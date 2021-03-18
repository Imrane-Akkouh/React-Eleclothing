import cartActionTypes from './cart-action.types';

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY,
})

export const addItemStart = (cartItem) => ({
    type: cartActionTypes.ADD_ITEM_START,
    payload: cartItem
});

export const addItemSuccess = (cartItems) => ({
    type: cartActionTypes.ADD_ITEM_SUCCESS,
    payload: cartItems
});

export const addItemFailure = (error) => ({
    type: cartActionTypes.ADD_ITEM_FAILURE,
    payload: error
});

export const removeItemStart = (cartItem) => ({
    type: cartActionTypes.REMOVE_ITEM_START,
    payload: cartItem
});

export const removeItemSuccess = (cartItems) => ({
    type: cartActionTypes.REMOVE_ITEM_SUCCESS,
    payload: cartItems
});

export const removeItemFailure = (error) => ({
    type: cartActionTypes.REMOVE_ITEM_FAILURE,
    payload: error
});

export const decreaseItemQuantityStart = (cartItem) => ({
    type: cartActionTypes.DECREASE_ITEM_QUANTITY_START,
    payload: cartItem
});

export const decreaseItemQuantitySuccess = (cartItems) => ({
    type: cartActionTypes.DECREASE_ITEM_QUANTITY_SUCCESS,
    payload: cartItems
});

export const decreaseItemQuantityFailure = (error) => ({
    type: cartActionTypes.DECREASE_ITEM_QUANTITY_FAILURE,
    payload: error
});

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART,
});

export const clearBackendCart = () => ({
    type: cartActionTypes.CLEAR_BACKEND_CART
});

export const getCurrentUserCart = (cartItems) => ({
    type: cartActionTypes.GET_CURRENT_USER_CART,
    payload: cartItems
});