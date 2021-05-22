import React from 'react';

import CustomButton from '../custom-button/custom-button';
import {selectCartItems} from '../../redux/cart/cart-selectors'
import './cart-dropdown.scss';
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'
import { createStructuredSelector } from 'reselect';
const CartDropDown = ({cartItems,history,dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(cartItem=>{
                    return <CartItem key={cartItem.id} item={cartItem}/>
                }):
                <span className='empty'>empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
        <br></br>
        <CustomButton red onClick={()=>dispatch(toggleCartHidden())}>QUIT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
