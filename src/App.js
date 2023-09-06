import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInandSignUpPage = lazy(() => import('./pages/signIn-and-signUp/signIn-and-signUp.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/shop/' element={<ShopPage />} />
              <Route exact path='/shop/:collectionId' element={<ShopPage />} />
              <Route exact path='/signin' element={this.props.currentUser ? (<Navigate replace={true} to="/" />) : (<SignInandSignUpPage />)} />
              <Route exact path='/checkout' element={<CheckoutPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
