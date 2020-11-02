export const addItemToCart = (cartItems, cartItem) =>{
    if(cartItems.find(item => cartItem.id === item.id)){
        return cartItems.map(item=>{
            if(cartItem.id === item.id){
                return {...cartItem, quantity: item.quantity+1}
            }
            return cartItem
        })
    }
    return [...cartItems, {...cartItem, quantity: 1}];
}