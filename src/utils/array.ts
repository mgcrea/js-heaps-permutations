/**
 * Checks if two arrays are equal by comparing their elements in the same order.
 *
 * @param a - The first array to compare.
 * @param b - The second array to compare.
 * @returns A boolean indicating whether the arrays are equal.
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [1, 2, 3];
 * const result = arraysEqual(array1, array2); // true
 */
export const arraysEqual = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Checks if two arrays contain the same elements with the same frequencies,
 * regardless of their order.
 * This method avoids sorting the arrays, which takes O(n log n) time complexity,
 * and instead has an overall O(n) time complexity.
 *
 * @param a - The first array to compare.
 * @param b - The second array to compare.
 * @returns A boolean indicating whether the arrays contain the same elements.
 *
 * @example
 * const array1 = [1, 2, 3, 2];
 * const array2 = [3, 2, 1, 2];
 * const result = arraysContainSameElementsFrequency(array1, array2); // true
 */
export const arraysContainSameElements = <T>(a: T[], b: T[]): boolean => {
  // Return false if arrays have different lengths
  if (a.length !== b.length) {
    return false;
  }

  // Create a Map to store the frequency of each element in array 'a'
  const frequencyMap: Map<T, number> = new Map();

  // Populate the frequency map with the count of occurrences for each element in 'a'
  for (const element of a) {
    const count = frequencyMap.get(element);
    frequencyMap.set(element, count ? count + 1 : 1);
  }

  // Iterate through array 'b' and decrease the count of each element in the map
  // If an element from 'b' is not in the map or the count reaches zero, remove it from the map
  for (const element of b) {
    const count = frequencyMap.get(element);
    if (!count) {
      return false;
    }
    if (count === 1) {
      frequencyMap.delete(element);
    } else {
      frequencyMap.set(element, count - 1);
    }
  }

  // Return true if the map is empty, meaning both arrays contain the same elements with the same frequencies
  return frequencyMap.size === 0;
};
