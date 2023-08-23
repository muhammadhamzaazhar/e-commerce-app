import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>)
                    : (<Link className="option" to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown /> //if hidden is true renders nothing, if hidden is false renders CartDropdown component
        }
    </div>
);

// const mapStateToProps = state => ({ //state object, this state is the root reducer.
//     currentUser: state.user.currentUser
// })

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({ //state object, this state is the root reducer.
//     currentUser,
//     hidden
// })

// const mapStateToProps = (state) => ({ //state object, this state is the root reducer.
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    //createStructureSelector will automatically pass are top level state that we get as our mapStateToProps into each subsequent selector
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); //connect() is a higher order component, H.C are just functions that take components as arguments and then return a new souped up component.
