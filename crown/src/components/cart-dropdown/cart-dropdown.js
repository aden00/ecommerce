import React from 'react';

import CustomButton from '../custom-button/custom-button';
import {selectCartItems} from '../../redux/cart/cart-selectors'
import './cart-dropdown.scss';

import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action'
const CartDropDown = ({cartItems,toggleCartHidden}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem=>{
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
        <br></br>
        <CustomButton red onClick={toggleCartHidden}>QUIT</CustomButton>
    </div>
)
const mapStateToProps = state => ({
    cartItems:selectCartItems(state)
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartDropDown);
