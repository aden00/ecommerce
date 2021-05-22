import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selectors'
import './checkout.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item'

const CheckoutPage = ({cartItems,total}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="headerblock">
                <span>Product</span>
            </div>
            <div className="headerblock">
                <span>Description</span>
            </div>
            <div className="headerblock">
                <span>Quantity</span>
            </div>
            <div className="headerblock">
                <span>Price</span>
            </div>
            <div className="headerblock">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);