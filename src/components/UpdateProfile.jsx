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
		<section className='text-white flex justify-center items-center flex-col h-screen'>
			<div>
				<h1 className='text-6xl text-center mb-32'>Exercise Generator</h1>
				<form onSubmit={handleSubmit} className='p-4 m-4 bg-dark-gray rounded-xl flex flex-col'>
					<p className='text-center text-3xl p-4'>Update Profile</p>
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
							Password:
						</label>
						<input
							type='password'
							id='password'
							ref={passwordRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
                            placeholder='Leave blank to keep the same'
							/>
					</div>
					<div className='flex flex-col'>
						<label className='p-2 mt-4' htmlFor='password-confirm'>
							Password confirmation:
						</label>
						<input
							type='password'
							id='password-confirm'
							
							ref={passwordConfirmRef}
							className='w-full p-2 bg-dark-gray rounded-lg border border-medium-gray hover:border-main-purple outline-none focus:outline-main-purple transition-colors'
                            placeholder='Leave blank to keep the same'
							/>
					</div>
					{error && <p className='mt-2 text-center text-red'>{error}</p>}
					<button
						disabled={loading}
						type='submit'
						className='p-2 mt-8 w-100 bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
						Uptade
					</button>
				</form>
				<div className='w-full text-center mt-2 text-white'><Link to='/' className='text-main-purple'>Cancel</Link></div>
			</div>
		</section>
	)
}

export default UpdateProfile