import { getRandomFromArray } from '../../../exerciseUtilis'

const PowerliftingThreeDayBenchPress = (squat, bench, deadlift, back, core, foreArms, glutes, sholders) => {
	const usedExercises = new Set()

	return {
		day1: [
			'Competition Bench Press',
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backHorizontal, usedExercises),
			getRandomFromArray(bench.types?.stablizacyjne, usedExercises),
			getRandomFromArray(foreArms.triceps, usedExercises),
			getRandomFromArray(foreArms.biceps, usedExercises),
		].filter(Boolean),

		day2: [
			getRandomFromArray(bench.types?.wariacja, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
			getRandomFromArray(bench.types?.stablizacyjne, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),

		day3: [
			'Larsen Press',
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
			getRandomFromArray(back.backVertical, usedExercises),
			getRandomFromArray(foreArms.triceps, usedExercises),
			getRandomFromArray(foreArms.biceps, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),
	}

}

export default PowerliftingThreeDayBenchPress
