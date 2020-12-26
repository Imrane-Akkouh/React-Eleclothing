import React from 'react';
import ErrorImage from '../error-image/error-image.component';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state={
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error){
        return { hasErrored: true };
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        return this.state.hasErrored ? (
            <ErrorImage></ErrorImage>   
        ) : this.props.children;
    }
}

export default ErrorBoundary;