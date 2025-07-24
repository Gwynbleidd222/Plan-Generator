import { getRandomFromArray } from '../../../exerciseUtilis'

const PowerliftingThreeDayPlanPPFBW = (squat, bench, deadlift, back, core, foreArms, glutes, sholders) => {
	const usedExercises = new Set()

	return {
		day1: [
			'Competition Bench Press',
			getRandomFromArray(squat.types?.wariacja, usedExercises),
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(foreArms.triceps, usedExercises),
		].filter(Boolean),

		day2: [
			'Competition Deadlift',
			getRandomFromArray(back.backVertical, usedExercises),
			getRandomFromArray(back.backHorizontal, usedExercises),
			getRandomFromArray(back.backIsolation, usedExercises),
			getRandomFromArray(foreArms.biceps, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),

		day3: [
			'Competition Squat',
			getRandomFromArray(bench.types?.wariacja, usedExercises),
			getRandomFromArray(squat.types?.akcesoryjne, usedExercises),
			getRandomFromArray(deadlift.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backHorizontal, usedExercises),
            getRandomFromArray(foreArms.triceps, usedExercises),
			getRandomFromArray(core.core, usedExercises),
		].filter(Boolean),
	}
}

export default PowerliftingThreeDayPlanPPFBW
