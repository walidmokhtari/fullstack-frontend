import React from "react";
import TitlePage from '../../components/UI/Title/TitlePage';
import { loadStripe, LoadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51KHW5kKqDxV6BG4Cp4aw7iOj2D2v7PaIocRjvmvKZ54iCckKC6TcXehTY7xJfJHqgzVYy2BekMu8rD2ROZ7kiEre00noX4IcG5");


const Index = () => {

    return (
        <div>
            <TitlePage title="Panier" />
        </div>
    )
}