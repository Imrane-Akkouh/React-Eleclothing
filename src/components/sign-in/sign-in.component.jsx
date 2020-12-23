import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="email" handleChange={handleChange} type="email" name="email" value={email} required />

                <FormInput label="password" handleChange={handleChange} type="password" name="password" value={password} required autoComplete="on" />

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Sign In With Google</CustomButton>
                </div>

            </form>

        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
