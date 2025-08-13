import { getRandomFromArray } from "../../../exerciseUtilis";

const PowerliftingThreeDayDeadlift = (squat, bench, deadlift, back, core, foreArms, glutes, sholders) => {
    const usedExercises = new Set()

    return {
        day1: [
            getRandomFromArray(deadlift.types?.wariacja, usedExercises),
            'Competition Deadlift',
            getRandomFromArray(deadlift.types?.izolowane, usedExercises),
            getRandomFromArray(squat.types?.izolowane, usedExercises),
            getRandomFromArray(deadlift.types?.izolowane, usedExercises),
            getRandomFromArray(core.core, usedExercises)
        ],

        day2: [
            'Competition Squat',
            getRandomFromArray(back.backVertical, usedExercises),
            getRandomFromArray(back.backHorizontal, usedExercises),
            getRandomFromArray(back.backIsolation, usedExercises),
            getRandomFromArray(back.backIsolation, usedExercises),
            getRandomFromArray(core.core, usedExercises)
        ],
        
        day3: [
            getRandomFromArray(deadlift.types?.wariacja, usedExercises),
            'Competition Deadlift',
            getRandomFromArray(back.backHorizontal, usedExercises),
            getRandomFromArray(deadlift.types?.akcesoryjne, usedExercises),
            getRandomFromArray(deadlift.types?.izolowane, usedExercises),
            getRandomFromArray(squat.types?.stablizacyjne, usedExercises),
            getRandomFromArray(deadlift.types?.stablizacyjne, usedExercises),
            getRandomFromArray(core.core, usedExercises)
        ]
    }
}

export default PowerliftingThreeDayDeadlift