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
    `;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    `;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

export const OptionDiv = styled.div`
    ${optionStyle}
    `;

export const OptionLink = styled(Link)`
    ${optionStyle}
    `;