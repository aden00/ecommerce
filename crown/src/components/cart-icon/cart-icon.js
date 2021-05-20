import React from 'react';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors'
import { connect } from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.scss'

const CartIcon =  ({toggleCartHidden,allQuantity}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{allQuantity}</span>
    </div>
)
const mapStateToProps = state => ({
    allQuantity:selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)