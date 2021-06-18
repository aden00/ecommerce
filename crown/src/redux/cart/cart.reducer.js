
import cartTypes from "./cart.types";
import { addItemToCart,decreaseItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
}
export const cartReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case cartTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden,
            }
        case cartTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case cartTypes.DELETE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case cartTypes.INCREASE_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case cartTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems:decreaseItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}