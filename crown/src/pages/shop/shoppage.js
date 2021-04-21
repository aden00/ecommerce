import React from 'react';
import SHOP_DATA from './data'
import CollectionPreview from '../../components/shoppreview/preview'
class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        return(
            <div>
                {this.state.collections
                .map(({id, ...otherCollectionProp})=>{
                    return <CollectionPreview key={id} {...otherCollectionProp}/>
                })}
            </div>

        )
    }
}

export default ShopPage