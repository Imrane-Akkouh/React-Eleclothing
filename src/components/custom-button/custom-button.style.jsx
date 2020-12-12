import styled, { css } from 'styled-components';

const GoogleSignInStyle = css`
    background-color: #4285f4;
    color: white;

    &: hover{
        background-color: white;
        color: #4285f4;
        border: 1px solid #4285f4;
    }
    `;

const InvertedStyle = css`
    background-color: white;
    color: black;

    &: hover{
        background-color: black;
        color:white;
    }
    `;
    
const DefaultStyle = css`
    background-color: black;
    color: white;

    &: hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    `;

const getButtonStyle = (props) => {
    if (props.isGoogleSignIn) {
        return GoogleSignInStyle;
    }

    return props.inverted ? InvertedStyle : DefaultStyle;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    ${getButtonStyle}
    `;