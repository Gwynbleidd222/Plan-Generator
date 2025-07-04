import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const StripeButton = ({priceId, amount}) => {
	const handleClick = async () => {
		const stripe = await stripePromise

		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: priceId,
					quantity: 1,
				},
				
			],

			mode: 'payment',
			successUrl: `${window.location.origin}/credits?success=true&type=${amount}`,
			cancelUrl: `${window.location.origin}/credits?canceled=true`,
		})

		if (error) console.error('Stripe checkout error:', error)
	}

	return <button
			className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'
	 		onClick={handleClick}>
				Zakup {amount} kredytów
			</button>
}

export default StripeButton
