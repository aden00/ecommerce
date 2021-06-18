import React from 'react';
import { connect } from "react-redux";
import './checkout-item.scss';
import {removeItem,increaseItem,decreaseItem} from '../../redux/cart/cart.action'
const CheckoutItem = ({cartItem:{name,imageUrl,price,quantity},increaseItem,removeItem,cartItem,decreaseItem}) =>(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
            
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span className='arrow' onClick={()=>decreaseItem(cartItem)}>&#10094; </span>
            <span>{quantity}</span> 
            <span className='arrow' onClick={()=>increaseItem(cartItem)}>&#10095;</span>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>removeItem(cartItem)}>&#10006;</div>
    </div>
)
const mapDispatchToProps = dispatch =>({
    removeItem:item=>dispatch(removeItem(item)),
    increaseItem:item=>dispatch(increaseItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);