import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//selectCartItems is a proprty iin cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity,
            0
        )
);