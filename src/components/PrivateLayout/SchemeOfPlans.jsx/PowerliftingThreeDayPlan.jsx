import { getRandomFromArray } from '../../../exerciseUtilis'

const PowerliftingThreeDayPlan = (squat, bench, deadlift, back, core, foreArms, glutes, sholders) => {
	const usedExercises = new Set()

	return {
		day1: [
			'Competition Squat',
			'Competition Bench Press',
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backHorizontal, usedExercises),
			getRandomFromArray(deadlift.types?.stablizacyjne, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
		].filter(Boolean),

		day2: [
			'Competition Deadlift',
			getRandomFromArray(bench.types?.wariacja, usedExercises),
			getRandomFromArray(squat.types?.akcesoryjne, usedExercises),
			getRandomFromArray(bench.types?.stablizacyjne, usedExercises),
			getRandomFromArray(back.backMix, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),

		day3: [
			getRandomFromArray(squat.types?.wariacja, usedExercises),
			getRandomFromArray(bench.types?.wariacja, usedExercises),
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(deadlift.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backVertical, usedExercises),
			getRandomFromArray(foreArms.triceps, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),
	}
  
}

export default PowerliftingThreeDayPlan
