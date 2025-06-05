import { getRandomFromArray } from '../../../exerciseUtilis'

const PowerliftingWodyn = (squat, bench, deadlift, back, core, foreArms) => {
	const usedExercises = new Set();

	return {
		day1: [
			getRandomFromArray(bench.types?.wariacja, usedExercises),
			getRandomFromArray(deadlift.types?.wariacja, usedExercises),
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(squat.types?.izolowane, usedExercises),
			getRandomFromArray(core.core, usedExercises)
		].filter(Boolean),

		day2: [
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(squat.types?.wariacja, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(deadlift.types?.izolowane, usedExercises),
			getRandomFromArray(core.core, usedExercises)
		].filter(Boolean),

		day3: [
			getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
			getRandomFromArray(back.backHorizontal, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(back.backVertical, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(bench.types?.izolowane, usedExercises),
			getRandomFromArray(foreArms.biceps, usedExercises),
			getRandomFromArray(foreArms.triceps, usedExercises),
		].filter(Boolean),
	};
};

export default PowerliftingWodyn;
