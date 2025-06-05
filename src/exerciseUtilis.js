// export const getRandomFromArray = (arr) => {
//     if (!arr || arr.length === 0) return null
//     const index = Math.floor(Math.random() * arr.length)
//     return arr[index]
//   }

export const getRandomFromArray = (arr, usedExercises) => {
  if (!arr || arr.length === 0) return null;

  const available = arr.filter(ex => !usedExercises.has(ex));
  if (available.length === 0) return null;

  const index = Math.floor(Math.random() * available.length);
  const selected = available[index];

  usedExercises.add(selected);
  return selected;
};