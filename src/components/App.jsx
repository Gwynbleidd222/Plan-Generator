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


function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Routes>
						<Route element={<PrivateRoute/>}>
							<Route element={<Dashboard/>} path='/' exact/>
							<Route element={<Modal/>} path='/modal'></Route>
							<Route element={<UpdateProfile/>} path='/update-profile'/>
							<Route element={<ExerciseGenerator/>} path='/exercise-generator'/>
							<Route element={<PlanGenerator/>} path='/plan-generator'/>
							<Route element={<SavedPlans/>} path='/saved-plans'/>
							
						</Route>
						<Route path='/signup' element={<Signup />} />
						<Route path='/login' element={<Login />} />
						<Route path='/forgot-password' element={<ForgotPassword/>}/>
					</Routes>
				</AuthProvider>
			</Router>
		</>
	)
}

export default App
