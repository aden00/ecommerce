import "./custom-button.scss";
import React from 'react';

const CustomButton = ({children,isGoogleSignIn,red,inverted,...otherProps}) => (
    <button className={`${red?'red':''}${inverted?'inverted':''} ${isGoogleSignIn?'google-sign-in':''} custom-button` }{...otherProps}>
        {children}
    </button>
)

export default CustomButton