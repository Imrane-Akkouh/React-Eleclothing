import {shopActionType} from './shop.types';



export const fetchCollectionsStart = ()=>({
    type: shopActionType.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collectionsMap)=>({
    type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMsg)=>({
    type: shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg
})
