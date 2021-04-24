import React from "react";
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/sign-up/sign-up'
import './signinorup.scss';

const SignInOrUp = () =>(
    <div className='signinorsignuppage'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInOrUp