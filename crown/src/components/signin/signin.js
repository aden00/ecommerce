import './signin.scss'
import FormInput from '../form-input/form-input'
import React from "react";
import CustomButton from '../../components/custom-button/custom-button'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit= (e) =>{
        e.preventDefault()

        this.setState({email:'',password:''})
    }
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({ [name]:value })
    }
    render(){
        return(
           <div className="sign-in">
               <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' handleChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                    <FormInput label='password' handleChange={this.handleChange} type="password" name="password" value={this.state.password} required/>

                    <CustomButton type="submit" value="Submit Form"> Sign In </CustomButton>
                </form>
           </div> 
        )
    }
}
export default SignIn