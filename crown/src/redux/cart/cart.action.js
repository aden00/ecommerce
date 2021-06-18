
import cartTypes from './cart.types';

export const toggleCartHidden = () => ({
    type:cartTypes.TOGGLE_CART_HIDDEN
})

export const addItem=payload=>({
    type:cartTypes.ADD_ITEM,
    payload:payload
})
export const removeItem = payload=>({
    type:cartTypes.DELETE_ITEM,
    payload:payload
})

export const increaseItem = payload =>({
    type: cartTypes.INCREASE_ITEM,
    payload:payload
})

export const decreaseItem = payload=>({
    type:cartTypes.DECREASE_ITEM,
    payload:payload
})