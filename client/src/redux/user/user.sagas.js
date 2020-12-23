import { takeLatest, put, call, all } from 'redux-saga/effects';

import { userActionTypes } from './user-action.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure } from './user-actions';

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUser(user)
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUser(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isAuthenticated);
}

export function* isAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUser(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* getSnapshotFromUser(userAuth, otherData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, otherData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }

}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* signUp({payload: { displayName, email, password }}) {
    try {
        console.log(email);
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, otherData: {displayName} }));
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signInAfterSignUp({payload: {user, otherData}}){
    yield getSnapshotFromUser(user, otherData)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
    ]);
}