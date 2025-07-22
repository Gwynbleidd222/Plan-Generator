import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useCredits } from '../../context/CreditsContext'
import StripeButton from './StripeButton'
import { useSearchParams } from 'react-router-dom'
import Modal from './Modal'
import { FaQuestion } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa6'

const Credits = () => {
	const [searchParams] = useSearchParams()
	const { addCredits } = useCredits()
	const [isOpen, setIsopen] = useState(false)
	const [isOpenQuestion, setIsOpenQuestion] = useState(false)
	const [creditsAmount, setCreditsAmount] = useState(null)

	const openFaQuestion = () => {
		setIsOpenQuestion(true)
	}

	useEffect(() => {
		const success = searchParams.get('success')
		const type = searchParams.get('type')

		if (success === 'true' && type) {
			const creditsAmount = parseInt(type, 10)

			const processStripePurchase = async () => {
				try {
					const result = await addCredits(creditsAmount, `Zakup ${creditsAmount} kredytów przez Stripe`)
					if (result) {
						setCreditsAmount(creditsAmount)
						console.log(`Dodano ${creditsAmount} kredytów`)
						const newURL = new URL(window.location.href)
						newURL.searchParams.delete('success')
						newURL.searchParams.delete('type')
						window.history.replaceState({}, '', newURL)
						setIsopen(true)
					}
				} catch (err) {
					console.error('Błąd podczas dodawania kredytów:', err)
				}
			}

			processStripePurchase()
		}
	}, [searchParams])

	return (
		<section className='max-w-7xl mx-auto  flex items-centr justify-center md:h-screen  flex-col text-white'>
			<div className=' text-center mt-20 space-y-8 p-4'>
				<h3 className='text-5xl md:text-6xl font-bold'>Zakup Kredytów</h3>
				<p className='text-xl text-medium-gray'>Kup kredyty aby móc generować plany treningowe i ćwiczenia</p>
				<div>
					<div className='flex justify-center items-center flex-col'>
						<p className='p-2'>Sprawdź jak dokonać symulacji płatności</p>
						<div className='p-2'><FaArrowDown /></div>
						<button
							onClick={openFaQuestion}
							className='p-4 mx-auto text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
							<FaQuestion />
						</button>
					</div>
				</div>

				<Modal open={isOpenQuestion} onClose={() => setIsOpenQuestion(false)}>
					<div className='mt-8 p-6 text-white text-center'>
						<p className='text-xl text-center uppercase font-bold max-w-sm'>
							Aby zasymulować płatność kartą, użyj poniższych danych testowych Stripe:
						</p>
						<ul>
							<li className='mt-4 text-left'>
								<span className='bold pr-2'>**Numer Karty:** </span> 4242 4242 4242 4242{' '}
							</li>
							<li className='mt-4 text-left'>
								<span className='bold pr-2'>**Imię i nazwisko:** </span> dowolne (np. `Yamal`){' '}
							</li>
							<li className='mt-4 text-left'>
								<span className='bold pr-2'>**Data ważności:** </span> dowolna przyszła (np. `12/34`){' '}
							</li>
							<li className='mt-4 text-left'>
								<span className='bold pr-2'>**CVC:** </span> dowolny 3-cyfrowy (np. `123`){' '}
							</li>
							<li className='mt-4 text-left'>
								<span className='bold pr-2'>**Kod pocztowy:** </span> dowolny (np. `00-000`){' '}
							</li>
						</ul>
						<p className='mt-10'> - Dane testowe nie wykonują prawdziwej transakcji.</p>
					</div>
				</Modal>
			</div>
			<div className='grid grid-cols-1  p-4 md:grid-cols-3 gap-4 md:gap-8 pt-8'>
				<div className='box-1  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
					<h3 className='text-2xl'>Start</h3>
					<div className='flex items-center justify-between'>
						<p className='text-5xl'>20zł</p>
						<p className=''> 20 kredytów</p>
					</div>
					<p className='text-sm text-medium-gray'>
						20 kredytów pozwoli Ci wygenerować jeden plan treningowy lub 10 ćwiczeń
					</p>
					<StripeButton priceId='price_1RgjqAPCTScP3W8VB5fVxpyY' amount={20} />
					<ul className='space-y-4'>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Dobre na start</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Jeden plan treningowy</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>10 ćwiczeń</span>
						</li>
					</ul>
				</div>
				<div className='box-2  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
					<h3 className='text-2xl'>Podstawa</h3>
					<div className='flex items-center justify-between'>
						<p className='text-5xl'>50zł</p>
						<p className=''> 60 kredytów</p>
					</div>
					<p className='text-sm text-medium-gray'>
						60 kredytów to idealny wybór, jeśli chcesz regularnie korzystać z aplikacji – wystarczy na kilka planów i
						wiele ćwiczeń.
					</p>
					<StripeButton priceId='price_1Rh68EPCTScP3W8V1Ex4D8kD' amount={60} />
					<ul className='space-y-4'>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Optymalny dla osób trenujących kilka razy w tygodniu</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Do 3 planów treningowych</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Nawet 30 ćwiczeń</span>
						</li>
					</ul>
				</div>
				<div className='box-3  bg-dark-gray p-6 mt-4 space-y-4 rounded-xl'>
					<h3 className='text-2xl'>Premium</h3>
					<div className='flex items-center justify-between'>
						<p className='text-5xl'>100zł</p>
						<p className=''>120 kredytów</p>
					</div>
					<p className='text-sm text-medium-gray'>
						120 kredytów to opcja dla najbardziej zaangażowanych – oszczędzasz i masz pełną swobodę korzystania z
						funkcji.
					</p>
					<StripeButton priceId='price_1Rh6BuPCTScP3W8VHOvjNUN1' amount={120} />
					<ul className='space-y-4'>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Najlepszy stosunek ilości do ceny</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Do 6 planów treningowych</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaCheck className='flex h-4 w-4 items-center justify-center rounded-full  text-main-purple' />
							<span className='text-medium-gray'>Nawet 60 ćwiczeń</span>
						</li>
					</ul>
				</div>
				<Modal open={isOpen} onClose={() => setIsopen(false)}>
					<div className='mt-8 p-6 text-white text-center uppercase'>
						<p className='text-xl text-center uppercase font-bold max-w-sm'>
							Do Twojego konta zostało dodane {creditsAmount} kredytów
						</p>
					</div>
				</Modal>
			</div>
		</section>
	)
}

export default Credits
