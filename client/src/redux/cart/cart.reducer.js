import cartActionTypes from './cart-action.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM_SUCCESS:
        case cartActionTypes.DECREASE_ITEM_QUANTITY_SUCCESS:
        case cartActionTypes.REMOVE_ITEM_SUCCESS:
            return ({
                ...state,
                cartItems: action.payload
            });
        case cartActionTypes.ADD_ITEM_FAILURE:
        case cartActionTypes.DECREASE_ITEM_QUANTITY_FAILURE:
        case cartActionTypes.REMOVE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case cartActionTypes.CLEAR_CART:
            return ({
                ...state,
                cartItems: []
            });
        case cartActionTypes.GET_CURRENT_USER_CART:
            return ({
                ...state,
                cartItems: action.payload
            });
        default:
            return state;
    }
}

export default cartReducer;