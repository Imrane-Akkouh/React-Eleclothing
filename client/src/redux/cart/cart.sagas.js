import { takeLatest, all, call, put } from 'redux-saga/effects'

import { userActionTypes } from '../user/user-action.types';
import { clearCart } from './cart.actions';

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}