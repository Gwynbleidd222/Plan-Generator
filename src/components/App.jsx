import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Modal from './PrivateLayout/Modal'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ExerciseGenerator from './PrivateLayout/ExerciseGenerator'
import PlanGenerator from './PrivateLayout/PlanGenerator'
import SavedPlans from './PrivateLayout/SavedPlans'
import Credits from './PrivateLayout/Credits'
import { CreditsProvider } from '../context/CreditsContext'

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<CreditsProvider>
					<Routes>
						<Route element={<PrivateRoute />}>
							<Route element={<Dashboard />} path='/' exact />
							<Route element={<Modal />} path='/modal'></Route>
							<Route element={<UpdateProfile />} path='/update-profile' />
							<Route element={<ExerciseGenerator />} path='/exercise-generator' />
							<Route element={<PlanGenerator />} path='/plan-generator' />
							<Route element={<SavedPlans />} path='/saved-plans' />
							<Route element={<Credits />} path='/credits' />
						</Route>
						<Route path='/signup' element={<Signup />} />
						<Route path='/login' element={<Login />} />
						<Route path='/forgot-password' element={<ForgotPassword />} />
					</Routes>
					</CreditsProvider>
				</AuthProvider>
			</Router>
		</>
	)
}

export default App
