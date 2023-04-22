// Utility function to swap two elements of an array.
export const swap = <T>(array: T[], i: number, j: number): void => {
  const temp = array[i]!;
  array[i] = array[j]!;
  array[j] = temp;
};
