import React, { useState } from 'react'
import exerciseData from '../../dataExercise'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import { useCredits } from '../../context/CreditsContext'
import { useAuth } from '../../context/AuthContext'

const ExerciseGenerator = () => {
	const [selectedWeakness, setSelectedWeakness] = useState('')
	const [selectedType, setSelectedType] = useState('')
	const [generatedExercise, setGeneratedExercise] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const { deductCredit, credits } = useCredits()
	const {isLoading} = useAuth()

	async function getExercise() {
		const weaknessObj = exerciseData.flatMap(group => group.weaknesses).find(w => w.value === selectedWeakness)

		if (!weaknessObj) return

		await deductCredit(2, 'Wygenerowanie ćwiczenia')

		const exercises = weaknessObj.types[selectedType] || []

		if (exercises.length === 0) {
			setGeneratedExercise('Brak ćwiczeń dla tego typu.')
			return
		}

		const randomIndex = Math.floor(Math.random() * exercises.length)
		const singleExercise = exercises[randomIndex]

		setGeneratedExercise(singleExercise)
		setSelectedWeakness('')
		setSelectedType('')
		setIsOpen(true)
	}

	return (
		<section className=' text-white flex items-centr justify-center h-screen flex-col lg:flex-row'>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
				<div className=' px-4'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mb-2 lg:mb-4'>
							Wygeneruj ćwiczenie pod swoje słabości
							<div className='flex items-center text-lg'></div>
						</h2>
						<p className='break-words'>Wybierz słabość boju i typ ćwiczenia</p>
						<p className='break-words mt-2'>
							<Link to='/plan-generator' className='font-bold text-main-purple hover:underline'>
								Wygeneruj plan treningowy
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className=' flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full  lg:w-1/2'>
				{!isLoading && selectedWeakness && selectedType && credits < 2 && (
					<p className='text-red text-center text-sm mt-2 max-w-sm'>Niewystarczająca liczba kredytów. Wygenerowanie ćwiczenia kosztuje 2 kredyty.</p>
				)}
				<div className='p-6 mt-2 text-center  rounded-lg shadow-lg bg-dark-gray'>
					<h3 className='text-4xl'>Generator Ćwiczeń</h3>
					<div className='p-2 mt-6'>
						<p className='text-left p-2'>Słabość boju</p>
						<select
							className='w-full p-2 mt-2 text-sm '
							value={selectedWeakness}
							onChange={e => setSelectedWeakness(e.target.value)}>
							<option value=''>-- wybierz słabość --</option>
							{exerciseData.map(group => (
								<optgroup key={group.category} label={group.category}>
									{group.weaknesses.map(option => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</optgroup>
							))}
						</select>
					</div>

					<div className='p-2 mt-4'>
						<p className='text-left p-2'>Typ ćwiczenia</p>
						<select
							className='w-full p-2 mt-2 text-sm '
							value={selectedType}
							onChange={e => setSelectedType(e.target.value)}>
							<option value=''>-- wybierz typ ćwiczenia --</option>
							<option value='wariacja'>Wariacja</option>
							<option value='akcesoryjne'>Akcesoryjne</option>
							<option value='izolowane'>Izolowane</option>
							<option value='stablizacyjne'>Stabilizacyjne</option>
						</select>
					</div>

					<div className='mt-6'>
						<button
							onClick={getExercise}
							className='p-4 mt-2 w-full bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
							disabled={!selectedWeakness || !selectedType || credits < 2}>
							Wygeneruj ćwiczenie - koszt 2 kredyty
						</button>

						<Modal open={isOpen} onClose={() => setIsOpen(false)}>
							<div className='flex justify-center items-center flex-col mt-8 p-6  text-white text-center uppercase'>
								<h4 className='text-4xl'>wygenerowane ćwiczenie</h4>
								<div className='mt-8 w-full h-[1px] bg-black'></div>
								{generatedExercise && (
									<p className='mt-8 text-xl  text-center uppercase text-main-purple font-bold '>{generatedExercise}</p>
								)}
							</div>
						</Modal>
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default ExerciseGenerator
