// import {db , auth} from '../src/firebase'
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// export const saveTrainingPlan = async (plan, planName = 'Trening bez nazwy') => {
// 	const user = auth.currentUser
// 	if (!user) throw new Error('Użytkownik niezalogowany')

// 	try {
// 		const plansRef = collection(db, 'users', user.uid, 'plans')
// 		await addDoc(plansRef, {
// 			name: planName,
// 			days: plan,
// 			createdAt: serverTimestamp(),
// 		})
// 	} catch (error) {
// 		console.error('Błąd zapisu planu:', error)
// 		throw error
// 	}
// }

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../src/firebase'

export const saveTrainingPlan = async (plan, selectedScheme, weaknesses) => {
	try {
		const user = auth.currentUser
		if (!user) throw new Error('Użytkownik niezalogowany')

		await addDoc(collection(db, 'users', user.uid, 'plans'), {
			name: selectedScheme,
			weaknesses: weaknesses,
			plan: plan,
			createdAt: serverTimestamp(),
		})
		console.log('Plan zapisany pomyślnie.')
	} catch (error) {
		console.error('Błąd zapisu planu:', error)
	}
}
