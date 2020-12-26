import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//you can use as='' or as={} on the component element tag to change its nature if you want same styled component for links.
const optionStyle = css`
    padding: 10px 15px;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    `;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
    `;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
    `;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 800px){
        width: 80%;
    }
    `;

export const OptionDiv = styled.div`
    ${optionStyle}
    `;

export const OptionLink = styled(Link)`
    ${optionStyle}
    `;