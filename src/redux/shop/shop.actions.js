import {shopActionType} from './shop.types';

export const getCollections = (collectionsMap)=>({
    type: shopActionType.GET_COLLECTIONS,
    payload: collectionsMap
})