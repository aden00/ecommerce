import {combineReducers } from "redux";
import {userReducer} from "./users/users.reducer";
import {cartReducer} from './cart/cart.reducer'
export default combineReducers({
    user:userReducer,
    cart:cartReducer
})