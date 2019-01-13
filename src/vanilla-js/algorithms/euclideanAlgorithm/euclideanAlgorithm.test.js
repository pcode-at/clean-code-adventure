import { getGgtUsingEuclideanAlgorithm } from "./euclideanAlgorithm";

describe("euclidean algorithm", () => {
  it('should return the correct ggt for both numbers - level 1', () => {
    const numberOne = 100;
    const numberTwo = 20;
    expect(getGgtUsingEuclideanAlgorithm(numberOne, numberTwo)).toBe(20);
  }),
  it('should return the correct ggt for both numbers - level 2', () => {
    const numberOne = 6666;
    const numberTwo = 567;
    expect(getGgtUsingEuclideanAlgorithm(numberOne, numberTwo)).toBe(3);
  }),
  it('should return the correct ggt for both numbers - level 3', () => {
    const numberOne = 56987589735
    const numberTwo = 23458;
    expect(getGgtUsingEuclideanAlgorithm(numberOne, numberTwo)).toBe(1);
  })
});
