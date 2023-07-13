import React from "react";

import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";

import './signIn-and-signUp.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="signIn-and-signUp">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;