import { createSelector } from "reselect";

const selectCart = state => state.cart //An input selector is a function that gets the whole state and just returns a slice of it one layer deep usually. We just want the cart. So we're going to pull state.cart because what it's going to get is the whole reducer state and we just want this piece of it using this input selector of select cart.

export const selectCartItems = createSelector(
    //createSelector call takes two arguments. The first argument is a collection so an array of input selectors. So we're gonna say select cart
    //the second argument is going to be a function that will return the value we want out of the selector.
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)