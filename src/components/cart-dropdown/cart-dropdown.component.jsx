import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                handleClick()
                dispatch(toggleCardHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// })

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);