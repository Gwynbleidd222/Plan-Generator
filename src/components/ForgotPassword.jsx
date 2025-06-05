import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Header from './Header'

function ForgotPassword() {
	const emailRef = useRef()
	const { resetPassword } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setMessage('')
			setError('')
			setLoading(true)
			await resetPassword(emailRef.current.value)
			setMessage('Check you inbox for further instructions')
		} catch (error) {
			setError(error.message)
		}
		setLoading(false)
	}

	return (
        <>
        <Header title='Zresetuj swoje hasło'/>
		<section className='text-white flex items-center justify-center h-screen flex-col lg:flex-row '>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
				<div className=' px-4'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mb-2 lg:mb-4'>
							Zapomniałeś hasła?
							<div className='flex items-center text-lg'></div>
						</h2>
						<p className='break-words'>Wprowadź dane swojego konta i kontynuuj resetowanie hasła</p>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full   lg:w-1/2'>
				<form onSubmit={handleSubmit} className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col max-w-[432px] w-full shadow-lg'>
					<p className='text-center text-3xl p-4'>Zresetuj hasło</p>
					<div className='flex flex-col'>
						<label className='p-2 mt-4' htmlFor='email'>
							Adres email:
						</label>
						<input
							type='email'
							id='email'
							required
							ref={emailRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
							
						/>
					</div>

					{error && <p className='mt-2 text-center text-red'>Wrong email</p>}
					{message && <p className='mt-2 text-center text-green-400'>{message}</p>}
					<button
						disabled={loading}
						type='submit'
						className='p-2 mt-8 w-100 bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
						Kontynuuj
					</button>
					<div className='w-full text-center mt-3 text-white'>
						{' '}
						<Link className='text-main-purple hover:underline' to='/login'>
							Zaloguj się
						</Link>{' '}
					</div>
				</form>
				<div className='w-full text-center mt-3 text-white '>
					Nie masz konta?{' '}
					<Link className='pl-4 text-main-purple hover:underline' to='/signup'>
						Zarejestruj się
					</Link>{' '}
				</div>
			</div>
		</section>
        </>
	)
}

export default ForgotPassword
