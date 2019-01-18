import { fncs } from "./array";

describe(
    "array",
    () =>
        describe(
            "level-1",
            () =>
                it("calculating the sum of the given number array", () => {
                    const numbers = [5, 7, 3, 10, 8];
                    expect(fncs.calculateSumOfNumbers(numbers)).toBe(33);
                }),

            it("get the biggest number of  the given number array", () => {
                const numbers = [5, 7, 3, 10, 8];
                expect(fncs.getBiggestNumber(numbers)).toBe(10);
            }),

            it("get the smallest number of  the given number array", () => {
                const numbers = [5, 7, 3, 10, 8];
                expect(fncs.getSmallestNumber(numbers)).toBe(3);
            })
        ),
    describe(
        "level-2",
        () =>
            it("get the second biggest number of  the given number array", () => {
                const numbers = [5, 7, 3, 10, 8, 12, 13];
                expect(fncs.getSecondBiggestNumber(numbers)).toBe(12);
            }),
        it("calculating the sum of all odd numbers in the given number array", () => {
            const numbers = [5, 7, 3, 10, 8, 12, 13];
            expect(fncs.calculateSumOfOddNumbers(numbers)).toBe(28);
        }),
        it("calculating the sum of all even numbers in the given number array", () => {
            const numbers = [5, 7, 3, 10, 8, 12, 13];
            expect(fncs.calculateSumOfEvenNumbers(numbers)).toBe(30);
        })
    ),
    describe(
        "level-3",
        () =>
            it("add number to array", () => {
                let numbers = [5, 7, 3, 10, 8, 12, 13];
                const addNumber = 99;
                const numbersWithAddedNumber = [5, 7, 3, 10, 8, 12, 13, 99];
                expect(fncs.addNumberToArray(numbers, addNumber)).toEqual(
                    numbersWithAddedNumber
                );
            }),
        it("remove number from array", () => {
            let numbers = [5, 7, 3, 10, 8, 12, 13];
            const removeNumber = 8;
            const numbersWithRemovedNumber = [5, 7, 3, 10, 12, 13];
            expect(fncs.removeNumberFromArray(numbers, removeNumber)).toEqual(
                numbersWithRemovedNumber
            );
        }),
        it("sort array ascending", () => {
            let numbers = [5, 7, 3, 10, 8, 12, 13];
            const numbersSorted = [3, 5, 7, 8, 10, 12, 13];
            expect(fncs.sortArrayAscending(numbers)).toEqual(numbersSorted);
        }),
        it("sort array descending", () => {
            let numbers = [5, 7, 3, 10, 8, 12, 13];
            const numbersSorted = [13, 12, 10, 8, 7, 5, 3];
            expect(fncs.sortArrayDescending(numbers)).toEqual(numbersSorted);
        })
    )
);