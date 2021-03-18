import { takeLatest, all, call, put, select } from 'redux-saga/effects'

import { userActionTypes } from '../user/user-action.types';
import cartActionTypes from '../cart/cart-action.types';
import { clearCart, getCurrentUserCart, addItemFailure, decreaseItemQuantityFailure, decreaseItemQuantitySuccess, removeItemSuccess, removeItemFailure, addItemSuccess} from './cart.actions';
import { getCart, addItemToCart, decreaseItemQuantity, removeCartItem } from './cart.utils';
import { firestore, getCurrentUser, getUserDoc } from '../../firebase/firebase.utils';

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* getCartOnAthenticationSuccess() {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, getAssociatedUserCart)
}

export function* onAddItemStart() {
    yield takeLatest(cartActionTypes.ADD_ITEM_START, addItemStartHandler)
}

export function* onRemoveItemStart() {
    yield takeLatest(cartActionTypes.REMOVE_ITEM_START, removeItemStartHandler)
}

export function* onDecreaseItemQuantityStart() {
    yield takeLatest(cartActionTypes.DECREASE_ITEM_QUANTITY_START, decreaseItemQuantityStartHandler)
}

export function* onClearBackendCart() {
    yield takeLatest(cartActionTypes.CLEAR_BACKEND_CART, clearBackendCartHandler)
}

export function* addItemStartHandler(action) {
    const state = yield select();
    try {
        const cartItems = yield call(addItemToCart, state.cart.cartItems, action.payload);
        yield put(addItemSuccess(cartItems));
    } catch (error) {
        yield put(addItemFailure(error))
    }
}

export function* removeItemStartHandler(action) {
    const state = yield select();
    try {
        const cartItems = yield call(removeCartItem, state.cart.cartItems, action.payload);
        yield put(removeItemSuccess(cartItems));
    } catch (error) {
        yield put(removeItemFailure(error))
    }
}

export function* decreaseItemQuantityStartHandler(action) {
    const state = yield select();
    try {
        const cartItems = yield call(decreaseItemQuantity ,state.cart.cartItems, action.payload);
        yield put(decreaseItemQuantitySuccess(cartItems));
    } catch (error) {
        yield put(decreaseItemQuantityFailure(error))
    }
}

export function* clearBackendCartHandler() {
    try {
        const userAuth = yield getCurrentUser();
        const userDoc = yield getUserDoc(userAuth.uid);
        yield firestore.collection('carts').doc(userDoc.data().cartId).set({});
        yield put(clearCart());
    } catch (error) {
        yield console.log(error + "\nfailed to reset cart");
    }
}

export function* getAssociatedUserCart() {
    const cartItems = yield getCart();
    yield put(getCurrentUserCart(cartItems))
}

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(getCartOnAthenticationSuccess),
        call(onAddItemStart),
        call(onRemoveItemStart),
        call(onDecreaseItemQuantityStart),
        call(onClearBackendCart)
    ]);
}