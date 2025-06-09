import { useState } from 'react'
import exerciseData from '../../dataExercise'
import { independentExercises } from '../../dataExercise'
import PowerliftingThreeDayPlan from './SchemeOfPlans.jsx/PowerliftingThreeDayPlan'
import PowerliftingWodyn from './SchemeOfPlans.jsx/PowerliftingWodyn'
import Modal from './Modal'
import { useAuth } from '../../context/AuthContext'
import { ThreeDots } from 'react-loading-icons'
import { saveTrainingPlan } from '../../firebaseUtilis'

const PlanGenerator = () => {
	const [squatWeakness, setSquatWeaknes] = useState('')
	const [benchWeakness, setBenchWeaknes] = useState('')
	const [deadliftWeakness, setDeadliftWeaknes] = useState('')
	const [selectedScheme, setSelectedScheme] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [generatedPlan, setGeneratedPlan] = useState(null)
	const { isLoading, setIsLoading } = useAuth()

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

		const schemeMap = {
			PowerliftingThreeDayPlan: PowerliftingThreeDayPlan,
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
		<div className='text-white h-screen flex items-center justify-center'>
			<div className='bg-dark-gray'>
				<div className='w-full p-6 text-center  rounded-lg shadow-lg'>
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
						</select>
					</div>
					<div className='mt-6'>
						<button
							onClick={handleGenerate}
							className='p-4 mt-2 w-full text-md flex items-center justify-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
							disabled={!squatWeakness || !benchWeakness || !deadliftWeakness || !selectedScheme}>
							{isLoading ? <ThreeDots className='h-6 w-6' /> : 'Wygeneruj Plan - koszt 20 kredytów'}
						</button>

						<Modal open={isOpen} onClose={() => setIsOpen(false)}>
							<div className='flex justify-center items-center flex-col mt-8 p-6 text-white text-center '>
								<div className='w-full overflow-y-scroll scrollbar-hidden max-h-[460px] pr-2'>
									<h4 className='text-4xl uppercase'>Plan Treningowy</h4>
									<div className='mt-8 w-full h-[1px] bg-black'></div>
									{generatedPlan && (
										<div className='text-left '>
											{Object.entries(generatedPlan).map(([day, exercises]) => (
												<div key={day} className='mt-4 '>
													<h5 className='text-2xl text-main-purple text-center font-bold'>{day.toUpperCase()}</h5>
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
									)}
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlanGenerator
