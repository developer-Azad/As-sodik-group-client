import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JxOf0L4nzzVZXH2Rt0bo6yyVWrF3zPw3It95SaLMmp6oCxUIwk4TvgrpWFXnGIffgSPzHZLQd7o1MlYNU6VQqfs00dNZF4ItG')


const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    const tax = appointment.price * 0.10;

    useEffect( () => {
        fetch(`https://gentle-tor-92239.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId]);

    return (
        <div>
            <h2>Please pay for : {appointment.patientName}</h2>
            <h2> pay : ${appointment.price}</h2>
            <h2> tax : ${tax}</h2>
            <h2> total : ${tax + appointment.price}</h2>
       
            { appointment?.price && <Elements stripe={stripePromise}>
             <CheckoutForm
                appointment={appointment}
             />
            </Elements>}
       
        </div>
    );
};

export default Payment;