import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './signUp.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handelSubmit = async event => {
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="signUp">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="signUp-form" onSubmit={this.handelSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handelChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handelChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handelChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handelChange} label='Confirm Password' required />
                </form>
                <CustomButton type='submit' > SIGN UP</CustomButton>
            </div>
        )
    }
}

export default SignUp