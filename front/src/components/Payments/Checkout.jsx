
import { useEffect, useState } from 'react';
import { Container } from './checkout.styled';
import { checkStatus, createTransaction } from './checkout.utils';

/**
    Stripe test cards:

    https://docs.stripe.com/testing
 */

export const Checkout = ({
    price,
    name,
    appointmentId,
}) => {

    const [transactionStatus, setTransactionStatus] = useState('NOT_FOUND');

    useEffect(() => {
        (async () => {
            const response = await checkStatus({ appointmentId });
            setTransactionStatus(response?.status || 'NOT_FOUND');
        }
        )();
    }, []);


    return (
        <Container>
            <section className="payments_checkout--section">
                <div className="payments_checkout--product">
                    <div className="payments_checkout--description">
                        <h3 className="payments_checkout--h3">Wizyta stacjonarna u {name}</h3>
                        <h5 className="payments_checkout--h5">{price} zł</h5>
                    </div>
                </div>
                <div>
                    {transactionStatus === 'NOT_FOUND' && (
                        <button type="button" onClick={() => createTransaction(
                            {
                                name,
                                price,
                                successUrl: `${window.location.href}?payment=success&appointmentId=${appointmentId}`,
                                cancelUrl: `${window.location.href}?payment=error&appointmentId=${appointmentId}`,
                                appointmentId,
                            }
                        )} id="checkout-button" className="payments_checkout--button" >Zapłać</button>
                    )}

                    {transactionStatus === 'SUCCESS' && (
                        <div className="payments_checkout--success">
                            Wizyta opłacona
                        </div>
                    )}
                </div>
            </section>
        </Container>
    )
}