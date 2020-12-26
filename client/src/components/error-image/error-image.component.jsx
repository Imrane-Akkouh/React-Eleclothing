import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-image.styles';

const ErrorImage = () => (
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png"></ErrorImageContainer>
        <ErrorImageText>Oops! This Page Is Broken.</ErrorImageText>
    </ErrorImageOverlay>
)

export default ErrorImage;