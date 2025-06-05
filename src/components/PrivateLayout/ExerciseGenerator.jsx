import React, { useState } from 'react'
import exerciseData from '../../dataExercise'
import Modal from './Modal'

const ExerciseGenerator = () => {
	const [selectedWeakness, setSelectedWeakness] = useState('')
	const [selectedType, setSelectedType] = useState('')
	const [generatedExercise, setGeneratedExercise] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const getExercise = () => {
		const weaknessObj = exerciseData.flatMap(group => group.weaknesses).find(w => w.value === selectedWeakness)

		if (!weaknessObj) return

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
		<div className=' text-white h-screen flex items-center justify-center'>
			<div className=' bg-dark-gray'>
				<div className='w-full p-6 text-center  rounded-lg shadow-lg'>
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
							disabled={!selectedWeakness || !selectedType}>
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
		</div>
	)
}

export default ExerciseGenerator
