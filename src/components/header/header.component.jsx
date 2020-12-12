import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/shop">Contact</OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv> 
                : 
                <OptionLink to="/authentication">Sign In</OptionLink>
            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown></CartDropdown>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartVisibility
})

export default connect(mapStateToProps)(Header);