import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './signIn.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signIn">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label='email' type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name="password" label='password' type="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;