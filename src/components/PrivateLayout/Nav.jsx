import React, { useState } from 'react'
import { PiBarbellThin } from 'react-icons/pi'
import { GiNotebook } from 'react-icons/gi'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { CiTimer } from 'react-icons/ci'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";

const Nav = () => {
	const [error, setError] = useState('')
	const { logout } = useAuth()
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
		<nav className='fixed w-full   bg-dark-gray text-white shadow-lg h-16'>
			<ul className='flex items-center justify-between  h-full lg:w-[800px] lg:mx-auto'>
				<Link
					to='/exercise-generator'
					className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<li>
						<PiBarbellThin className='text-white text-3xl' />
					</li>
				</Link>
				<Link
					to='/plan-generator'
					className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<GiNotebook className='text-white text-3xl' />
				</Link>
				<Link
					to='/saved-plans' 
					className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<CiTimer className='text-white text-3xl' />
				</Link>
				<li className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<p className='text-white text-3xl' value='0'>
						0
					</p>
				</li>
				<Link
					to='/' 
					className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<IoPersonOutline className='text-white text-3xl' />
				</Link>
				<li
					onClick={handleLogout}
					className='h-full flex-1 flex items-center justify-center hover:bg-main-purple transition-colors duration-200 cursor-pointer'>
					<RiLogoutBoxRLine className='text-white text-3xl' />
				</li>
			</ul>
			{error && <p className='mt-2 text-center text-red'>{error}</p>}
		</nav>
	)
}

export default Nav
