import CartActionTypes from "./cart.types";
import { addItemToCart, removeItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true, //because we want to hide cart-dropdown when it first comes to our website
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //We want our cart-items array to be our old cart-items. And then with the newest action that got fired. 
                //That is trigger add item we want to deposit whatever the item it is in the payload of that action into this array.
                //So we'll first spread in the existing cart items that are already on our state and then we're just going to add the action payload to the end of this array, all we're doing is we're spreading in all of our array values and then any additional values we add at the end will automatically appear in the very end of this array following all of our spread values from our existing array
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer;