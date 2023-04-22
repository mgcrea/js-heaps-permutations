import { describe, expect, it } from "vitest";
import { heapsPermutations } from "./../src";

describe("heapsPermutations", () => {
  it("should generate correct permutations for an array of length 1", () => {
    const inputArray = [1];
    const expectedResult = [[1]];
    const result = heapsPermutations(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should generate correct permutations for an array of length 2", () => {
    const inputArray = [1, 2];
    const expectedResult = [
      [1, 2],
      [2, 1],
    ];
    const result = heapsPermutations(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should generate correct permutations for an array of length 3", () => {
    const inputArray = [1, 2, 3];
    const expectedResult = [
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ];
    const result = heapsPermutations(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should generate correct permutations for an array of strings", () => {
    const inputArray = ["a", "b"];
    const expectedResult = [
      ["a", "b"],
      ["b", "a"],
    ];
    const result = heapsPermutations(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should generate correct permutations for an empty array", () => {
    const inputArray: unknown[] = [];
    const expectedResult = [[]];
    const result = heapsPermutations(inputArray);
    expect(result).toEqual(expectedResult);
  });
});
