import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'

const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { signup } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [show, setShow] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)

	const showPassword = () => {
		setShow(prev => !prev)
	}

	const showPasswordConfirm = () => {
		setShowConfirm(prev => !prev)
	}

	async function handleSubmit(e) {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Password do not match')
		}

		try {
			setError('')
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
			navigate('/')
		} catch (error) {
			setError(error.message)
		}
		setLoading(false)
	}

	return (
		<>
			<Header title='Załóż konto na exercise generator' />
			<section className='text-white flex items-centr justify-center h-screen flex-col lg:flex-row'>
				<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
					<div className=' px-4'>
						<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
							<h2 className='text-3xl mb-2 lg:mb-4'>
								Stwórz swoje konto na exercise generator
								<div className='flex items-center text-lg'></div>
							</h2>
							<p className='break-words'>Wprowadź swój adres email i hasło, aby się założyć konto.</p>
						</div>
					</div>
				</div>
				<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:w-1/2'>
					<form
						onSubmit={handleSubmit}
						className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col max-w-[432px] w-full shadow-lg'>
						<p className='text-center text-3xl p-4'>Zarejestruj się</p>
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
						<div className='relative flex flex-col'>
							<label className='p-2 mt-4' htmlFor='password'>
								Hasło:
							</label>
							<input
								type={show ? 'text' : 'password'}
								id='password'
								required
								ref={passwordRef}
								className=' w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
							/>
							<button 
								type='button' 
								onClick={showPassword} className='absolute inset-y-0 top-10 right-0 mt-4'>
								{show ? (
									<BiHide className='w-8 h-8 text-main-purple' />
								) : (
									<BiShowAlt className='w-8 h-8 text-main-purple' />
								)}
							</button>
						</div>
						<div className='relative flex flex-col'>
							<label className='p-2 mt-4' htmlFor='password-confirm'>
								Powtórz hasło:
							</label>
							<input
								type={showConfirm ? 'text' : 'password'}
								id='password-confirm'
								required
								ref={passwordConfirmRef}
								className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
							/>
							<button 
								type='button' 
								onClick={showPasswordConfirm} className='absolute inset-y-0 top-10 right-0 mt-4'>
								{showConfirm ? (
									<BiHide className='w-8 h-8 text-main-purple' />
								) : (
									<BiShowAlt className='w-8 h-8 text-main-purple' />
								)}
							</button>
						</div>
						{error && <p className='mt-2 text-center text-red'>{error}</p>}
						<button
							disabled={loading}
							type='submit'
							className='p-2 mt-8 w-100 bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
							Zarejestruj się
						</button>
					</form>
					<div className='w-full text-center mt-2 text-white'>
						Posiadasz już konto?{' '}
						<Link to='/login' className='pl-2 text-main-purple'>
							Zaloguj się
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default Signup
