/* eslint-disable @typescript-eslint/no-non-null-assertion */

// Utility function to shuffle an array in place using Fisher-Yates (also known as the Knuth) algorithm
export const shuffleArrayInPlace = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex]!, array[i]!];
  }

  return array;
};

// Utility function to shuffle an array using Fisher-Yates (also known as the Knuth) algorithm
export const shuffleArray = <T>(array: T[]): T[] => {
  const clonedArray = [...array];
  return shuffleArrayInPlace(clonedArray);
};
