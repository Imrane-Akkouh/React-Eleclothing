import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.style.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Spinner from './components/spinner/spinner.component.jsx';
import ErrorImage from './components/error-image/error-image.component.jsx';

const App = ({ checkUserSession, currentUser }) => {

  const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
  const Shop = lazy(() => import('./pages/shop/shop.component'));
  const Authentication = lazy(() => import('./components/authentication/authentication.component'));
  const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route exact path="/contact" render={() => (<ErrorImage></ErrorImage>)}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route exact path="/authentication" render={() => currentUser ? (<Redirect to="/"></Redirect>) : (<Authentication></Authentication>)}></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
