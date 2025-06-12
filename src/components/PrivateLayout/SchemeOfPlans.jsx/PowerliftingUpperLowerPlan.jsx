import { getRandomFromArray } from '../../../exerciseUtilis'

const PowerliftingUpperLowerPlan = (squat, bench, deadlift, back, core, foreArms, glutes) => {
    const usedExercises = new Set()

    return {
        day1: [
            'Competition Squat',
            getRandomFromArray(deadlift.types?.wariacja, usedExercises),
            getRandomFromArray(squat.types?.akcesoryjne, usedExercises),
            getRandomFromArray(deadlift.types?.izolacyjne, usedExercises),
            getRandomFromArray(core.core, usedExercises),
        ].filter(Boolean),
        
        day2: [
            'Competition Bench Press',
            getRandomFromArray(bench.types?.stablizacyjne, usedExercises),
            getRandomFromArray(foreArms.triceps, usedExercises),
            getRandomFromArray(back.backHorizontal, usedExercises),
            getRandomFromArray(back.backVertical, usedExercises),
            getRandomFromArray(back.backIsolation, usedExercises),
        ].filter(Boolean),
        
        day3: [
            getRandomFromArray(squat.types?.wariacja, usedExercises),
            'Competition Deadlift',
            getRandomFromArray(deadlift.types?.akcesoryjne, usedExercises),
            getRandomFromArray(core.core, usedExercises),
        ].filter(Boolean),
        
        day4: [
            getRandomFromArray(bench.types?.wariacja, usedExercises),
            getRandomFromArray(bench.types?.akcesoryjne, usedExercises),
            getRandomFromArray(foreArms.triceps, usedExercises),
            getRandomFromArray(back.backHorizontal, usedExercises),
            getRandomFromArray(back.backIsolation, usedExercises),
            getRandomFromArray(back.backIsolation, usedExercises),
        ].filter(Boolean),
    }
  
}

export default PowerliftingUpperLowerPlan