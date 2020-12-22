import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.style.scss';
import { signUpStart } from '../../redux/user/user-actions';

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
        const { signUpStart } = this.props;
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("ِConfirmation Password Mismatch");
            return;
        }

        signUpStart({email, password, displayName});

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

const mapDispatchToProps = dispatch => ({
    signUpStart: (credentials) => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp);