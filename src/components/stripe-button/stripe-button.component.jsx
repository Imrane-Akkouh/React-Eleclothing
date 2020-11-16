import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const onToken = token => console.log(token);

    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51Ho7SjGv6ppkvGL4qbc5BMr8OpsrYizI7ErBVknOahPl0pjhzbbjNOaae5ko9z8yUhQ6vDQkfnOoG6bMUpQXBri300H703x4S6'

    return (
        <StripeCheckout 
        label="Buy Now"
        name="EleClothing LTD" 
        billingAddress shippingAddress 
        image="https://svgshare.com/i/CUz.svg" 
        description={`Your Total is $ ${price}`} 
        amount={stripePrice} 
        panelLabel="Pay Now" 
        token={onToken} 
        stripeKey={publishableKey}></StripeCheckout>
    )
}

export default StripeButton;