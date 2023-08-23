export const addItemToCart = (cartItems, addItemToCart) => {
    //addItemToCart is gonna take two arguments. The first is all the existing cart items that are in our cart items array.
    //The second item is the cart item that we want to add because we're going to look inside of our existing cart items to see if that cart item already exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === addItemToCart.id)
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === addItemToCart.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...addItemToCart, quantity: 1 }] //quantity property gets attached the first time around since this if block won't run when it's a new item  
}

export const removeItem = (cartItems, removeItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === removeItem.id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== removeItem.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === removeItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}