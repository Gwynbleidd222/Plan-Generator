import { getRandomFromArray } from "../../../exerciseUtilis"

const PowerliftingThreeDayPlan = (squat, bench, deadlift, back, core,) => {
  return {
    day1: [
      'Competition Squat',
      'Competition Bench Press',
      getRandomFromArray(bench.types?.stablizacyjne),
      getRandomFromArray(back.backHorizontal),
      getRandomFromArray(deadlift.types?.stablizacyjne),
      getRandomFromArray(back.backIsolation),
    ].filter(Boolean),
    day2: [
      'Competition Deadlift',
      getRandomFromArray(bench.types?.wariacja),
      getRandomFromArray(squat.types?.akcesoryjne),
      getRandomFromArray(bench.types?.stablizacyjne),
      getRandomFromArray(back.backMix),
      getRandomFromArray(back.backIsolation),
      getRandomFromArray(core.core),
    ].filter(Boolean),
    day3: [
      getRandomFromArray(squat.types?.wariacja),
      getRandomFromArray(bench.types?.wariacja),
      getRandomFromArray(bench.types?.akcesoryjne),
      getRandomFromArray(deadlift.types?.akcesoryjne),
      getRandomFromArray(back.backVertical),
      getRandomFromArray(bench.types?.izolowane),
      getRandomFromArray(core.core),
    ].filter(Boolean)
  }
}


export default PowerliftingThreeDayPlan