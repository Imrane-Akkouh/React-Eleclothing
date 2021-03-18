import { firestore, getCurrentUser, getUserDoc } from '../../firebase/firebase.utils';

export const addItemToCart = async (cartItems, cartItem) => {
    const userAuth = await getCurrentUser();
    const updatedCart = pushToCart(cartItems, cartItem);
    console.log(updatedCart);
    if (userAuth) {
        const userDoc = await getUserDoc(userAuth.uid);
        try {
            await firestore.collection('carts').doc(userDoc.data().cartId).update({ ...updatedCart });

        } catch (error) {
            throw error;
        }
    }
    return updatedCart;
}

export const decreaseItemQuantity = async (cartItems, cartItem) => {
    const userAuth = await getCurrentUser();
    const updatedCart = decreaseQuantity(cartItems, cartItem);
    if (userAuth) {
        const userDoc = await getUserDoc(userAuth.uid);
        try {
            if (updatedCart.find(item => item.id === cartItem.id) !== undefined) {
                await firestore.collection('carts').doc(userDoc.data().cartId).update({ ...updatedCart });
            } else {
                await firestore.collection('carts').doc(userDoc.data().cartId).set({ ...updatedCart });
            }
        } catch (error) {
            throw error;
        }
    }
    return updatedCart;
}

export const removeCartItem = async (cartItems, cartItem) => {
    const userAuth = await getCurrentUser();
    const updatedCart = cartItems.filter(item => item.id !== cartItem.id);
    if (userAuth) {
        const userDoc = await getUserDoc(userAuth.uid);
        try {
            await firestore.collection('carts').doc(userDoc.data().cartId).set({ ...updatedCart });
        } catch (error) {
            throw error;
        }
    }
    return updatedCart;
}

export const pushToCart = (cartItems, cartItem) => {
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

export const decreaseQuantity = (cartItems, cartItem) => {
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

export const getCart = async () => {
    const userAuth = await getCurrentUser();
    const userDoc = await getUserDoc(userAuth.uid);
    const cartItems = await firestore.collection('carts').doc(userDoc.data().cartId).get();
    return Object.values(cartItems.data());
}

