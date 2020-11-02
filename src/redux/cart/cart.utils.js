export const addItemToCart = (cartItems, cartItem) =>{
    if(cartItems.find(item => cartItem.id === item.id) !== undefined){
        return cartItems.map(item=>{
            if(cartItem.id === item.id){
                return {...item , quantity: item.quantity + 1}
            }
            return item;
        })
    }
    return [...cartItems, {...cartItem, quantity: 1}];
}