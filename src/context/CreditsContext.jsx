import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getAvailableCredits, saveCreditTransaction } from '../credits'
import { useAuth } from './AuthContext'

const CreditsContext = createContext()

export const CreditsProvider = ({ children }) => {
	const { currentUser } = useAuth()
	const [credits, setCredits] = useState(0)
	const [isLoadingCredits, setIsLoadingCredits] = useState(true)

	
	const fetchAndSetCredits = useCallback(async () => {
		if (!currentUser) {
			setCredits(0)
			setIsLoadingCredits(false)
			return
		}

		setIsLoadingCredits(true)
		try {
			const currentTotalCredits = await getAvailableCredits()
			setCredits(currentTotalCredits)
		} catch (error) {
			console.error('Błąd podczas pobierania kredytów:', error)
			setCredits(0)
		} finally {
			setIsLoadingCredits(false)
		}
	}, [currentUser])


	useEffect(() => {
		fetchAndSetCredits()
	}, [fetchAndSetCredits]) 

	const deductCredit = useCallback(async (amount , description = 'Zużycie kredytu') => {
		if (!currentUser) {
			console.error('Błąd: Użytkownik niezalogowany. Nie można odjąć kredytów.')
			return false
		}
		if (credits < amount) {
			console.warn('Niewystarczająca liczba kredytów do odjęcia.')
			return false
		}

		try {
			
			await saveCreditTransaction({
				type: 'usage',
				amount: -amount,
				description: description,
			})
			
			await fetchAndSetCredits()
			return true 
		} catch (error) {
			console.error('Błąd podczas odejmowania kredytów:', error)
			return false
		}
	}, [currentUser, credits, fetchAndSetCredits])

	const addCredits = useCallback(async (amount, description = 'Zakup kredytów') => {
		if (!currentUser) {
			console.error('Błąd: Użytkownik niezalogowany. Nie można dodać kredytów.')
			return false
		}
		if (amount <= 0) {
			console.warn('Ilość kredytów do dodania musi być większa niż 0.')
			return false
		}

		try {
			await saveCreditTransaction({
				type: 'purchase',
				amount: amount,
				description: description,
			})
			await fetchAndSetCredits()
			return true
		} catch (error) {
			console.error('Błąd podczas dodawania kredytów:', error)
			console.error('Błąd przy dodawaniu kredytów:', error.code, error.message);
			return false
		}
	}, [currentUser, fetchAndSetCredits])

	const value = {
		credits,
		isLoadingCredits,
		deductCredit, 
		addCredits, 
		refreshCredits: fetchAndSetCredits,
	}

	return <CreditsContext.Provider value={value}>{children}</CreditsContext.Provider>
}

export const useCredits = () => useContext(CreditsContext)
