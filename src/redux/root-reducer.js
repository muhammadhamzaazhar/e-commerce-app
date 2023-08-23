//The root reducer is the actual base reducer object that represents all of the state of our application so this root reducer will end up being the actual code that combines all of our other states together.

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; //what we'll get here is the actual local storage object on our window browser.

import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root', // We need to tell it the key. So our key is root essentially meaning at what point inside of our reducer object do we want to start storing everything
    storage, // then we want to pass storage in as storage.
    whitelist: ['cart'] // this property is an array containing the string names of any of the reducer that we want to store.
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });