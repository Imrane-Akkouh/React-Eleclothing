import React from 'react';

import './authentication.style.scss';

import { SignIn } from '../sign-in/sign-in.component';

const Authentication = (props) => {
    return (
        <div className="Authentication">
            <SignIn></SignIn>
        </div>
    )
}

export default Authentication;