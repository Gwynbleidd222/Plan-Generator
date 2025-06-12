import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { currentUser, updateEmailUser, updatePasswordUser } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Password do not match')
		}

        const promises = []
        setLoading(true)
        setError('')
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmailUser(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePasswordUser(passwordRef.current.value))
        }
            
        Promise.all(promises).then(()=> {
            navigate('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(()=> {
            setLoading(false)
        })

		
	}

	return (
		<section className='text-white flex items-centr justify-center h-screen flex-col lg:flex-row '>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full lg:bg-gradient-to-r from-neutral-700 to-gray-900 lg:w-1/2'>
				<div className=' px-4'>
					<div className='max-w-[432px] mx-auto lg:max-w-[592px]'>
						<h2 className='text-3xl mb-2 lg:mb-4'>
							Zaaktualizuj swój profil
							<div className='flex items-center text-lg'></div>
						</h2>
						<p className='break-words'>Wprowadź swój nowy adres email lub ustaw nowe hasło dla swojego konta</p>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-col place-content-center place-items-center pt-8 lg:h-full  lg:w-1/2'>
				
				<form onSubmit={handleSubmit} className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col max-w-[432px] w-full shadow-lg'>
					<p className='text-center text-3xl p-4'>Aktualizuj profil</p>
					<div className='flex flex-col'>
						<label className='p-2 mt-4' htmlFor='email'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							required
							ref={emailRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
							defaultValue={currentUser.email}
							/>
					</div>
					<div className='flex flex-col'>
						<label className='p-2 mt-4' htmlFor='password'>
							Hasło:
						</label>
						<input
							type='password'
							id='password'
							ref={passwordRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
                            placeholder='Zostaw puste jeśli nie chcesz zmieniać'
							/>
					</div>
					<div className='flex flex-col'>
						<label className='p-2 mt-4' htmlFor='password-confirm'>
							Powtórz hasło:
						</label>
						<input
							type='password'
							id='password-confirm'
							
							ref={passwordConfirmRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
                            placeholder='Zostaw puste jeśli nie chcesz zmieniać'
							/>
					</div>
					{error && <p className='mt-2 text-center text-red'>{error}</p>}
					<button
						disabled={loading}
						type='submit'
						className='p-2 mt-8 w-100 bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
						Aktualizuj
					</button>
				</form>
				<div className='w-full text-center mt-2 text-white'><Link to='/' className='text-main-purple'>Wróć</Link></div>
			</div>
		</section>
	)
}

export default UpdateProfile