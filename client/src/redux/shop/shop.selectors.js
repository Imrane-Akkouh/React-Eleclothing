import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
)

export const selectCollection = (collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    )
}

export const selectIsFetching = createSelector(
    [selectShop],
    state => state.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    state => !!state.collections
)
