import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeButton = ({ price }) => {
    
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51I1ZqnEoiE42PqSGkMkKcsIFIqMkyuRyvCCY8NA40lhXUL3viK2uH9oEZ8ByX8wPatbXkfQjIoc5czrILvhW1uh400PIxzaYra'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        }).then(response => {
            alert('Payment was Successful.');
        }).catch(error => {
            console.log(JSON.parse(error));
            alert('Payment was Unsuccessful, Please make sure to use a valid Credit Card!');
        })
    }

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