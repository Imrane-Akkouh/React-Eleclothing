import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartVisibility = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => (
        cartItems.reduce((accumulator, cartItem) => (accumulator + cartItem.quantity), 0)
    )
)