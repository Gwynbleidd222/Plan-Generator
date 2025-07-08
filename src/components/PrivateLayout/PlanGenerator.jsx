import React, { useState } from 'react'
import exerciseData from '../../dataExercise'
import { independentExercises } from '../../dataExercise'
import PowerliftingThreeDayPlan from './SchemeOfPlans.jsx/PowerliftingThreeDayPlan'
import PowerliftingWodyn from './SchemeOfPlans.jsx/PowerliftingWodyn'
import PowerliftingFourDayPlan from './SchemeOfPlans.jsx/PowerliftingFourDayPlan'
import PowerliftingUpperLowerPlan from './SchemeOfPlans.jsx/PowerliftingUpperLowerPlan'
import Modal from './Modal'
import { useAuth } from '../../context/AuthContext'
import { ThreeDots } from 'react-loading-icons'
import { saveTrainingPlan } from '../../firebaseUtilis'
import { Link } from 'react-router-dom'
import { useCredits } from '../../context/CreditsContext'

const PlanGenerator = () => {
	const [squatWeakness, setSquatWeaknes] = useState('')
	const [benchWeakness, setBenchWeaknes] = useState('')
	const [deadliftWeakness, setDeadliftWeaknes] = useState('')
	const [selectedScheme, setSelectedScheme] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [generatedPlan, setGeneratedPlan] = useState(null)
	const { isLoading, setIsLoading } = useAuth()
	const { deductCredit, credits } = useCredits()

	const getWeaknessOptions = category => {
		const found = exerciseData.find(group => group.category === category)
		return found ? found.weaknesses : []
	}

	async function handleGenerate() {
		setIsLoading(true)

		const squatData = exerciseData.find(g => g.category === 'Squat').weaknesses.find(w => w.value === squatWeakness)

		const benchData = exerciseData.find(g => g.category === 'Bench').weaknesses.find(w => w.value === benchWeakness)

		const deadliftData = exerciseData
			.find(g => g.category === 'Deadlift')
			.weaknesses.find(w => w.value === deadliftWeakness)

		if (!squatWeakness || !benchWeakness || !deadliftWeakness || !selectedScheme) {
			return
		}

		await deductCredit(20, 'Wygenerowanie planu treningowego')

		const schemeMap = {
			PowerliftingThreeDayPlan: PowerliftingThreeDayPlan,
			PowerliftingFourDayPlan: PowerliftingFourDayPlan,
			PowerliftingUpperLowerPlan: PowerliftingUpperLowerPlan,
			PowerliftingWodyn: PowerliftingWodyn,
		}

		if (schemeMap[selectedScheme]) {
			const generatePlan = schemeMap[selectedScheme]

			const plan = generatePlan(
				squatData,
				benchData,
				deadliftData,
				independentExercises.back,
				independentExercises.core,
				independentExercises.foreArms,
				independentExercises.glutes
			)

			try {
				const weaknesses = [squatData.label, benchData.label, deadliftData.label]
				const schemeNameMap = {
					PowerliftingThreeDayPlan: '3 dni - FBW',
					PowerliftingFourDayPlan: '4 dni - FBW',
					PowerliftingUpperLowerPlan: '4 dni - Góra Dół',
					PowerliftingWodyn: '3 dniowy plan (Wodyn)',
				}
				const wrappedPlan = {
					days: Object.entries(plan)
						.sort(([dayA], [dayB]) => {
							const getNumber = str => parseInt(str.match(/\d+/)?.[0], 10)
							return getNumber(dayA) - getNumber(dayB)
						})
						.map(([day, exercises]) => ({
							name: day,
							exercises: exercises,
						})),
				}
				await saveTrainingPlan(wrappedPlan, schemeNameMap[selectedScheme], weaknesses)
				console.log('dni treningowe: ', wrappedPlan)
			} catch (error) {
				console.error('Nie udało się zapisać planu:', error)
			}

			setIsLoading(true)

			setTimeout(() => {
				setGeneratedPlan(plan)
				setIsOpen(true)
				setBenchWeaknes('')
				setDeadliftWeaknes('')
				setSquatWeaknes('')
				setSelectedScheme('')
				setIsLoading(false)
			}, 1000)
		}
	}

	return (
		<section className='text-white flex items-centr justify-center h-screen flex-col lg:flex-row '>
			<div className='flex w-full flex-col place-content-center place-items-center mt-28 lg:-mt-0 pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
				<div className=' px-4'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mb-2 lg:mb-4'>
							Wygeneruj swój plan treningowy
							<div className='flex items-center text-lg'></div>
						</h2>
						<p className='break-words'>
							Wybierz swoje słabości do każdego boju, następnie wybierz schemat treningowy i wygeneruj plan
						</p>
						<Link to='/exercise-generator' className='font-bold text-main-purple hover:underline'>
							Wygeneruj ćwiczenie
						</Link>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full  lg:w-1/2'>
				{!isLoading && squatWeakness && benchWeakness && deadliftWeakness && selectedScheme && credits < 20 && (
					<p className='text-red text-sm mt-2 max-w-sm text-center'>
						Niewystarczająca liczba kredytów. Wygenerowanie planu kosztuje 20 kredytów.
					</p>
				)}
				<div className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col max-w-[432px] w-full shadow-l text-center'>
					<h3 className='text-4xl'>Generator Planów</h3>
					<div className='p-2 mt-6'>
						<p className='text-left p-2'>Słabość w przysiadzie</p>
						<select
							value={squatWeakness}
							onChange={e => setSquatWeaknes(e.target.value)}
							className='w-full p-2 mt-2 text-sm '>
							<option value=''>-- wybierz --</option>
							{getWeaknessOptions('Squat').map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className='p-2 mt-2'>
						<p className='text-left p-2'>Słabość w wyciskaniu</p>
						<select
							value={benchWeakness}
							onChange={e => setBenchWeaknes(e.target.value)}
							className='w-full p-2 mt-2 text-sm '>
							<option value=''>-- wybierz --</option>
							{getWeaknessOptions('Bench').map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className='p-2 mt-2'>
						<p className='text-left p-2'>Słabość w martwym ciągu</p>
						<select
							value={deadliftWeakness}
							onChange={e => setDeadliftWeaknes(e.target.value)}
							className='w-full p-2 mt-2 text-sm '>
							<option value=''>-- wybierz --</option>
							{getWeaknessOptions('Deadlift').map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className='p-2 mt-2'>
						<p className='text-left p-2'>Schemat Treningowy</p>
						<select
							value={selectedScheme}
							onChange={e => setSelectedScheme(e.target.value)}
							className='w-full p-2 mt-2 text-sm '>
							<option value=''>-- wybierz --</option>
							<option value='PowerliftingThreeDayPlan'>3 dni - FBW</option>
							<option value='PowerliftingWodyn'>3 dniowy plan (Wodyn)</option>
							<option value='PowerliftingFourDayPlan'>4 dni - FBW</option>
							<option value='PowerliftingUpperLowerPlan'>4 dni - Góra Dół</option>
						</select>
					</div>
					<div className='mt-6'>
						<button
							onClick={handleGenerate}
							className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
							disabled={!squatWeakness || !benchWeakness || !deadliftWeakness || !selectedScheme || credits < 20}>
							{isLoading ? <ThreeDots className='h-6 w-6' /> : 'Wygeneruj Plan - koszt 20 kredytów'}
						</button>

						<Modal open={isOpen} onClose={() => setIsOpen(false)}>
							<div className='flex justify-center items-center flex-col mt-8 p-6 text-white text-center '>
								<div className='w-full overflow-y-scroll scrollbar-hidden max-h-[460px] pr-2'>
									<h4 className='text-4xl uppercase'>Plan Treningowy</h4>
									<div className='mt-8 w-full h-[1px] bg-black'></div>
									{generatedPlan && (
										<div className='text-left '>
											<div className='xl:flex'>
											{Object.entries(generatedPlan).map(([day, exercises]) => (
												<div key={day} className='mt-4 '>
													<h5 className='text-2xl text-main-purple text-center xl:text-left font-bold xl:mb-8'>{day.toUpperCase()}</h5>
													<ul className='list-none'>
														{exercises.map((exercise, index) => (
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
									)}
								</div>
							</div>
						</Modal>
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default PlanGenerator
