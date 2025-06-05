import React from 'react'
import ReactDOM from 'react-dom'
import { IoIosCloseCircle } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ children, open, onClose }) => {
	if (!open) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{open && (
				<div className='fixed inset-0 z-50 flex items-center justify-center'>
					<motion.div
						className='absolute inset-0 bg-black bg-opacity-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
						onClick={onClose}
					/>
					<motion.div
						className='relative z-50 max-w-sm  bg-dark-gray  p-10 rounded-lg shadow-lg text-white '
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						transition={{ duration: 0.4 }}>
						<button
							onClick={onClose}
							className='absolute top-0 left-0 p-4 text-2xl text-main-purple hover:text-main-purple-hover transition-colors'>
							<IoIosCloseCircle />
						</button>
						
							{children}
						
						<button
							onClick={onClose}
							className='p-4 mt-4 w-full bg-main-purple rounded-xl font-bold hover:bg-main-purple-hover transition-colors'>
							Zamknij
						</button>
					</motion.div>
				</div>
			)}
		</AnimatePresence>,
		document.getElementById('portal')
	)
}

export default Modal
