import { swap } from "src/utils";

// The heapsPermutations function generates all permutations of a given array using Heap's algorithm.
export const heapsPermutations = <T>(array: T[]): T[][] => {
  // Initialize an empty array to store the generated permutations.
  const permutations: T[][] = [];
  const length = array.length;
  // Initialize an array 'c' with the same length as the input array, filled with zeros.
  // This array will be used to control the iteration over each element of the input array.
  const c = new Array(length).fill(0);

  // Add a copy of the original array to the permutations array.
  permutations.push([...array]);

  // Initialize a variable 'i' to control the loop.
  let i = 0;
  // The main loop continues until 'i' reaches the length of the input array.
  while (i < length) {
    // If the value in 'c' at index 'i' is less than 'i',
    // it's time to swap elements and generate a new permutation.
    if (c[i] < i) {
      // If 'i' is even, swap the first element with the element at index 'i'.
      if (i % 2 === 0) {
        swap(array, 0, i);
      }
      // If 'i' is odd, swap the elements at indices 'c[i]' and 'i'.
      else {
        swap(array, c[i], i);
      }
      // Add a copy of the modified array to the permutations array.
      permutations.push([...array]);
      // Increment the value in 'c' at index 'i' by 1.
      c[i]++;
      // Reset 'i' to 0, so the loop will continue checking for swaps from the beginning.
      i = 0;
    }
    // If the value in 'c' at index 'i' is not less than 'i',
    // reset the value in 'c' at index 'i' to 0 and increment 'i'.
    else {
      c[i] = 0;
      i++;
    }
  }

  // Return the generated permutations.
  return permutations;
};
