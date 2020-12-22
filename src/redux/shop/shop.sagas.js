import { takeLatest, call, all, put } from 'redux-saga/effects';

import { shopActionType } from './shop.types';

import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionType.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* fetchCollections() {
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}