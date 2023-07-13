import React from "react";
import { Form } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './signIn.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" label='email' type="email" value={this.state.email} handelChange={this.handelChange} required />
                    <FormInput name="password" label='password' type="password" value={this.state.password} handelChange={this.handelChange} required />
                    {/* <input type="submit" value="Submit Form" /> */}
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;