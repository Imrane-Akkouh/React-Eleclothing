import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import categoryReducer from './category/category.reducer';
import shopReducer from './shop/shop.reducer';

const persistConf = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConf, rootReducer);