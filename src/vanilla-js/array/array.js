import { array } from "prop-types";

export const fncs = {
    calculateSumOfNumbers: numbers => {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    },

    getBiggestNumber: numbers => {
        let biggestNum = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > biggestNum) {
                biggestNum = numbers[i];
            }
        }
        return biggestNum;
    },

    getSmallestNumber: numbers => {
        let smallestNum = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallestNum) {
                smallestNum = numbers[i];
            }
        }
        return smallestNum;
    },

    getSecondBiggestNumber: numbers => {
        let biggestNum = numbers[0];
        let secondBiggestNum = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > biggestNum) {
                biggestNum = numbers[i];
            }
        }

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > secondBiggestNum && numbers[i] < biggestNum) {
                secondBiggestNum = numbers[i];
            }
        }
        return secondBiggestNum;
    },

    calculateSumOfOddNumbers: numbers => {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            if ((numbers[i] % 2) !== 0) {
                sum += numbers[i];
            }
        }
        return sum;
    },

    calculateSumOfEvenNumbers: numbers => {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            if ((numbers[i] % 2) === 0) {
                sum += numbers[i];
            }
        }
        return sum;
    },

    addNumberToArray: (numbers, addNumber) => {
        numbers[numbers.length] = addNumber;

        return numbers;
    },

    removeNumberFromArray: (numbers, removeNumber) => {
        let myArray = [];

        for (let number of numbers) {
            if (number !== removeNumber) {
                myArray[myArray.length] = number;
            }
        }
        return myArray;
    },

    sortArrayAscending: numbers => {
        let myArray = [];

        for (let i in numbers)
            myArray[i] = numbers[i];

        for (let i = myArray.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (myArray[j] > myArray[j + 1]) {
                    let rack = myArray[j];
                    myArray[j] = myArray[j + 1];
                    myArray[j + 1] = rack;
                }
            }
        }
        return myArray;
    },

    sortArrayDescending: numbers => {
        let myArray = [];

        for (let i in numbers)
            myArray[i] = numbers[i];

        for (let i = myArray.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (myArray[j] < myArray[j + 1]) {
                    let rack = myArray[j + 1];
                    myArray[j + 1] = myArray[j];
                    myArray[j] = rack;
                }
            }
        }
        return myArray;
    }
};