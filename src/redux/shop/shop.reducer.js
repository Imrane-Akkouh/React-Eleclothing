import { shopActionType } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMsg: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case shopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;