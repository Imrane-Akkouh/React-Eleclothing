import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password Mismatch");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                currentUser: {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            })
        }catch(error){
            console.log(error.message);
        }

    }

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign-up with your e-mail and password</span>
                <form className="sign-up-form">
                    <FormInput type="text" name="displayName" value={displayName} label="display-name" required onChange={this.handleChange}></FormInput>
                    <FormInput type="email" name="email" value={email} label="email" required onChange={this.handleChange}></FormInput>
                    <FormInput type="password" name="password" value={password} label="password" required onChange={this.handleChange}></FormInput>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} label="confirm-password" required onChange={this.handleChange}></FormInput>
                    <CustomButton type="submit" onClick={this.handleSubmit}>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;