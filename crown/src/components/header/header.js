import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/users/user.selector'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
//redux 
import { connect } from 'react-redux'
const Header = ({currentUser,hidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {currentUser?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>}
                <CartIcon/>
            </div>
            {hidden?null:<CartDropDown/>}
        </div>
    )
}
const mapStateToProps = state => createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header)
