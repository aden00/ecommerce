import React from "react";
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button'
import './collection-item.scss';

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item
    return(
        <div className='collection-item'>
            <div 
            style={{backgroundImage:`url(${imageUrl})`}}
            className='image'/>

            <div className="collection-footer">
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps) (CollectionItem)