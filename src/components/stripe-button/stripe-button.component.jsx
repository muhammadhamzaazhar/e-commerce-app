import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //Stripe wants the price in cents
    const publishableKey = process.env.REACT_APP_STRIPE_API_KEY;

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            // image=""
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken} //The token is the on success callback that triggers is when we submit.
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;