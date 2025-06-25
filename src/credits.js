import { collection, addDoc, serverTimestamp, query, getDocs } from 'firebase/firestore'
import { db, auth } from '../src/firebase'

export const saveCreditTransaction = async transactionDetails => {
	try {
		const user = auth.currentUser
		if (!user) {
			console.error('Użytkownik niezalogowany. Nie można zapisać transakcji kredytowej.')
			throw new Error('Użytkownik niezalogowany')
		}

		await addDoc(collection(db, 'users', user.uid, 'credits'), {
			...transactionDetails,
			createdAt: serverTimestamp(),
		})
		console.log('Transakcja kredytowa zapisana pomyślnie.')
	} catch (error) {
		console.error('Błąd zapisu transakcji kredytowej:', error)
		throw error
	}
}

export const getAvailableCredits = async () => {
	try {
		const user = auth.currentUser
		if (!user) {
			console.error('Użytkownik niezalogowany. Nie można pobrać kredytów.')
			throw new Error('Użytkownik niezalogowany')
		}

		const creditsCollectionRef = collection(db, 'users', user.uid, 'credits')
		const q = query(creditsCollectionRef)

		const querySnapshot = await getDocs(q)

		let totalCredits = 0
		querySnapshot.forEach(doc => {
			const data = doc.data()

			if (typeof data.amount === 'number') {
				totalCredits += data.amount
			}
		})

		console.log(`Pobrano dostępne kredyty: ${totalCredits}`)
		return totalCredits
	} catch (error) {
		console.error('Błąd pobierania dostępnych kredytów:', error)
		return 0
	}
}
