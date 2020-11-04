export const addItemToCart = (cartItems, cartItem) => {
    if (cartItems.find(item => cartItem.id === item.id) !== undefined) {
        return cartItems.map(item => {
            if (cartItem.id === item.id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        })
    }
    return [...cartItems, { ...cartItem, quantity: 1 }];
}

export const decreaseItemQuantity = (cartItems, cartItem) => {
    const wantedItem = cartItems.find(item => cartItem.id === item.id);
    if (wantedItem.quantity === 1)
        return cartItems.filter(item => item.id !== cartItem.id)
    if (wantedItem.quantity > 1)
        return cartItems.map(item => {
            if (cartItem.id === item.id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        })
}

