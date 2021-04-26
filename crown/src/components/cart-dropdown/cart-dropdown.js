import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';


const CartDropDown = () =>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown;
