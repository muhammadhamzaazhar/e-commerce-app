import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInandSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        //we have to check if database is updated with new data, likewise onAuthStateChanged() we will see if snapShot is changed
        //onSnapshot() returns a snapShot object
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data() //We can also get the actual properties on the object by calling the .data() method, which returns us a JSON object of the document.
          //   }
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(this.state);
        });
      }
      else {
        // this.setState({ currentUser: userAuth });
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
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/shop/' element={<ShopPage />} />
          <Route exact path='/shop/:collectionId' element={<ShopPage />} />
          {/* <Route exact path='/signin' element={<SignInandSignUpPage />} /> */}
          <Route exact path='/signin' element={this.props.currentUser ? (<Navigate replace={true} to="/" />) : (<SignInandSignUpPage />)} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  //Now what we'll end up returning inside of our mapdispatch will be set current user but it goes to a function that gets the user object and then calls dispatch and what dispatches is. It is a way for redux to know that whatever you're passing me whatever object you're passing me is going to be an action object that I'm going to pass to every producer so our user action is a function that gets the user but returns an action object.
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
