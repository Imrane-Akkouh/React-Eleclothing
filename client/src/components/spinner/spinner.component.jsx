import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style';

const Spinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    )
}

export default Spinner;