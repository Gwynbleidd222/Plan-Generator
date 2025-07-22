import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ThreeDots } from 'react-loading-icons'
import Modal from './Modal'

const SavedPlans = () => {
	const [plans, setPlans] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [selectedPlan, setSelectedPlan] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				try {
					const plansRef = collection(db, 'users', user.uid, 'plans')
					const snapshot = await getDocs(plansRef)
					const fetchedPlans = snapshot.docs.map(doc => ({
						id: doc.id,
						...doc.data(),
					}))
					setPlans(fetchedPlans)
					console.log(fetchedPlans)
				} catch (error) {
					console.error('Błąd pobierania planów:', error.message)
				} finally {
					setTimeout(() => {
						setIsLoading(false)
					}, 1000)
				}
			} else {
				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			}
		})

		return () => unsubscribe()
	}, [setIsLoading])

	const openPlan = plan => {
		setSelectedPlan(plan)
		setIsOpen(true)
	}

	return (
		<section className='text-white flex flex-col 2xl:flex-row min-h-screen'>
			<div className='w-full 2xl:w-1/2 flex items-center justify-center p-8 '>
				<div className='max-w-[592px] text-center lg:text-left'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mt-20 mb-2 lg:mb-4'>
							Tutaj znajdują się twoje wygenerowane plany treningowe
							<div className='flex items-center text-lg'></div>
						</h2>
					</div>
				</div>
			</div>

			<div className='w-full 2xl:w-1/2 p-4 max-h-[90vh] '>
				{isLoading ? (
					<div className='flex justify-center items-center h-full'>
						<ThreeDots fill='#fff' className='w-12 h-12' />
					</div>
				) : (
					<div className='mt-20 flex flex-wrap justify-center items-center'>
						{plans.map(plan => (
							<div
								key={plan.id}
								className=' p-4 m-4 bg-dark-gray text-center rounded-xl  max-w-[432px] w-full shadow-lg'>
								<h3 className='text-3xl mb-2 lg:mb-4'>{plan.name}</h3>
								<p>Zastosowane filtry:</p>
								<div className='mt-8 flex justify-center sm:items-center gap-4'>
									<div className='flex flex-wrap items-center justify-center gap-4 '>
										{plan.weaknesses.map((weakness, index) => (
											<span
												key={index}
												className='flex items-center justify-center p-2 text-sm w-48 h-[60px] rounded-full font-bold  border  border-indigo-500'>
												{weakness}
											</span>
										))}
										{/* {plan.weaknesses[2] && (
										<span className='flex p-2 text-sm w-48 rounded-full font-bold text-center border border-indigo-500'>
											{plan.weaknesses[2]}
										</span>
									)} */}
									</div>
								</div>

								<button
									className='p-4 mt-8 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'
									onClick={() => openPlan(plan)}>
									Pokaż plan
								</button>

								<Modal open={isOpen} onClose={() => setIsOpen(false)}>
									<div className='mt-8 p-6 text-white text-center'>
										<div className='w-full overflow-y-scroll scrollbar-hidden max-h-[460px] pr-2'>
											<h4 className='text-4xl uppercase'>plan treningowy</h4>
											<div className='mt-8 w-full h-[1px] bg-black'></div>
											<div className='xl:flex'>
											{selectedPlan?.plan?.days?.map((dayObj, i) => (
												<div key={i} className=' text-left mt-4 pl-4 xl:pl-8'>
													<h5 className='text-2xl text-main-purple text-center xl:text-left font-bold xl:mb-8 '>
														{dayObj.name.replace(/(\D+)(\d+)/, '$1 $2').toUpperCase()}
													</h5>
													<ul className='list-none '>
														{dayObj.exercises.map((exercise, index) => (
															<li className='mt-2' key={index}>
																<span className='mr-2'>{index + 1}.</span>
																{exercise}
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
										</div>
									</div>
								</Modal>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default SavedPlans
