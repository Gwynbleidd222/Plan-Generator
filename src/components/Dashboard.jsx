import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function Dashboard() {
	const { currentUser, logout } = useAuth()
	const [error, setError] = useState('')
	const navigate = useNavigate()

	async function handleLogout() {
		setError('')

		try {
			await logout()
			navigate('/login')
		} catch {
			setError('Failed to logout')
		}
	}

	return (
		<section className='text-white flex items-centr justify-center h-screen flex-col lg:flex-row'>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
				<div className=' px-4'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mb-2 lg:mb-4'>
							Edytuj swój profil
							<div className='flex items-center text-lg'></div>
						</h2>
						<p className='break-words'>Tutaj możesz zmienić swój email oraz hasło.</p>
						<p className='break-words mt-2'>
							<Link
								to='/saved-plans'
								className='font-bold text-main-purple hover:underline'>
								Zobacz Wygenerowane plany
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:w-1/2'>
				<div className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col w-[375px]'>
					<p className='text-center text-3xl p-4'>Profil</p>
					{error && <p className='mt-2 text-center text-red'>{error}</p>}
					<div className='flex p-2 mt-4 text-left'>
						<p className=' font-bold pr-2'>Email:</p>
						{currentUser.email}
					</div>

					<Link
						to='/update-profile'
						className='p-2 mt-8 w-full text-center bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
						Edytuj Swój profil
					</Link>
				</div>
				<div>
					<button onClick={handleLogout} className='p-2 mt-8 font-bold text-main-purple hover:underline'>
						Wyloguj się
					</button>
				</div>
			</div>
		</section>
	)
}

export default Dashboard
