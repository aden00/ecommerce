import React from 'react';
import './sign-up.scss'
import '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async (e) =>{
        e.preventDefault();        
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert('PASSWORD AND CONFIRM PASSWORD ARE NOT THE SAME')
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password);
            await createUserProfileDocument(user,{displayName})

            this.setState({     
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''})
        }catch(error){
            console.error(error)
        }


    }
    handleChange = e =>{
        const {name,value} = e.target;
        this.setState({[name]:value})
    }
    render() {
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        value={displayName}
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        label='Name'
                        required/>
                    <FormInput
                        name='email'
                        value={email}
                        type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        required/>
                    <FormInput
                        name='password'
                        value={password}
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <FormInput
                        value={confirmPassword}
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp