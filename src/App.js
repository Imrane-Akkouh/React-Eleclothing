import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './components/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';

import { checkUserSession } from './redux/user/user-actions';

import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ checkUserSession, currentUser }) => {



  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route exact path="/authentication" render={()=>currentUser? (<Redirect to="/"></Redirect>):(<Authentication></Authentication>)}></Route>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
