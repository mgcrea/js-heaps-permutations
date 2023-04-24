import { shuffleArray, shuffleArrayInPlace } from "src";
import { describe, expect, it } from "vitest";

describe("shuffleArray", () => {
  it("should shuffle an array without modifying the original array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const shuffledArr = shuffleArray(arr);

    expect(shuffledArr).not.toBe(arr);
    expect(shuffledArr).not.toEqual(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should shuffle an empty array", () => {
    const arr: number[] = [];
    const shuffledArr = shuffleArray(arr);

    expect(shuffledArr).toEqual([]);
  });

  it("should produce a shuffled array that contains all original elements", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const shuffledArr = shuffleArray(arr);

    for (const item of arr) {
      expect(shuffledArr).toContain(item);
    }
  });
});

describe("shuffleArrayInPlace", () => {
  it("should shuffle an array in place", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const shuffledArr = shuffleArrayInPlace(arr);

    expect(shuffledArr).toBe(arr);
    expect(shuffledArr).not.toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should shuffle an empty array", () => {
    const arr: number[] = [];
    const shuffledArr = shuffleArrayInPlace(arr);

    expect(shuffledArr).toEqual([]);
  });

  it("should produce a shuffled array that contains all original elements", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const shuffledArr = shuffleArray(arr);

    for (const item of arr) {
      expect(shuffledArr).toContain(item);
    }
  });
});

describe("shuffleArray and shuffleArrayInPlace are unbiased", () => {
  // Number of trials to run for testing unbiased shuffling
  const numTrials = 10000;
  // Allowed variation from the expected frequency (in this case, 5%)
  const epsilon = 0.05;
  // Number of items in the array to shuffle
  const numItems = 3;
  // Number of possible permutations for the array (factorial of numItems)
  const itemCount = factorial(numItems);
  // Expected frequency of each permutation
  const expectedFrequency = numTrials / itemCount;

  // Count the occurrences of each permutation after shuffling
  const countPermutations = (shuffleFn: (arr: number[]) => number[]): Map<string, number> => {
    const counts = new Map<string, number>();

    for (let i = 0; i < numTrials; i++) {
      const arr = [1, 2, 3];
      const shuffled = shuffleFn(arr);
      const key = shuffled.join(",");

      counts.set(key, (counts.get(key) || 0) + 1);
    }

    return counts;
  };

  // Check if the frequency of each permutation is within the allowed variation from the expected frequency
  const checkFrequency = (counts: Map<string, number>) => {
    for (const count of counts.values()) {
      const diff = Math.abs(count - expectedFrequency);
      expect(diff).toBeLessThanOrEqual(expectedFrequency * epsilon);
    }
  };

  // eslint-disable-next-line vitest/expect-expect
  it("should shuffleArra is unbiased", () => {
    const counts = countPermutations(shuffleArray);
    checkFrequency(counts);
  });

  // eslint-disable-next-line vitest/expect-expect
  it("should shuffleArrayInPlac is unbiased", () => {
    const counts = countPermutations(shuffleArrayInPlace);
    checkFrequency(counts);
  });

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
});
