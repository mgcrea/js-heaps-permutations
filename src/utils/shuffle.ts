import { arraysEqual } from "./array";
import { swap } from "./swap";

/**
 * Shuffles the elements of an array in-place using the Fisher-Yates algorithm.
 *
 * @param array - The array to shuffle.
 * @returns The shuffled array.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const shuffledArray = shuffleArrayInPlace(array);
 */
export const shuffleArrayInPlace = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
  return array;
};

/**
 * Shuffles the elements of an array and returns a new array, leaving the original array unmodified.
 *
 * @param array - The array to shuffle.
 * @returns A new array containing the shuffled elements.
 *
 * @example
 * const array = [1, 2, 3, 4, 5];
 * const shuffledArray = shuffleArray(array);
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const clonedArray = [...array];
  return shuffleArrayInPlace(clonedArray);
};

/**
 * Generates a random permutation of an array, ensuring the resulting permutation is different from the input array.
 *
 * @param array - The array to generate a permutation for.
 * @returns A new array containing the random permutation.
 *
 * @example
 * const array = [1, 2, 3];
 * const randomPermutation = getRandomPermutation(array);
 */
export const getRandomPermutation = <T>(array: T[]) => {
  let shuffledArray: T[];
  do {
    shuffledArray = shuffleArray(array);
  } while (arraysEqual(array, shuffledArray));
  return shuffledArray;
};
