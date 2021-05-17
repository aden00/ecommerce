import cartTypes from './cart.types';

export const toggleCartHidden = () => ({
    type:cartTypes.TOGGLE_CART_HIDDEN
})

export const addItem=payload=>({
    type:cartTypes.ADD_ITEM,
    payload:payload
})