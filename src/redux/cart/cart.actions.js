import CartActionTypes from "./cart.types";

export const toggleCardHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //we don't need the payload
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})