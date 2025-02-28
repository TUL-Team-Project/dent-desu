import { APIS } from '../../config';

export const createTransaction = async ({
    name,
    price,
    successUrl,
    cancelUrl,
    appointmentId,
}) => {
    try {
        const response = await fetch(`${APIS.payment.transaction}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `Wizyta stacjonarna u ${name}`,
                appointmentId,
                amount: price,
                successUrl,
                cancelUrl,
                paymentService: APIS.payment.base,
        }),
    });
    const session = await response.json();
    window.location = session.url;
    } catch (error) {
        console.error(error);
    }
};

export const checkStatus = async ({
    appointmentId,
}) => {
    try {
        const response = await fetch(`${APIS.payment.transaction}${appointmentId}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}