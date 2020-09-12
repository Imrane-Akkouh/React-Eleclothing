import React from 'react';

import './authentication.style.scss';

import { SignIn } from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

const Authentication = (props) => {
    return (
        <div className="authentication">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default Authentication;