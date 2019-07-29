import { array } from "prop-types";

export const fncs = {
  calculateSumOfNumbers: numbers => {
    return numbers.reduce((a, b) => a + b);
  },

  getBiggestNumber: numbers => {
    return Math.max(...numbers);
  },

  getSmallestNumber: numbers => {
    return Math.min(...numbers);
  },

  getSecondBiggestNumber: numbers => {
    return numbers[(numbers.sort((a, b) => a - b).length) - 2];
  },

  calculateSumOfOddNumbers: numbers => {
    return numbers
      .filter(number => number % 2 !== 0)
      .reduce((sum, number) => {
        return sum + number;
      }, 0);

  //   const numbers = [5, 7, 3, 10, 8, 12, 13];
  //   let sum = 0;
  //   numbers.forEach(element => {
  //     if (element % 2 === 0) {
  //       sum = sum + element;
  //     }
  //   });
  },

  calculateSumOfEvenNumbers: numbers => {
    return numbers
    .filter(number => number % 2 === 0)
    .reduce((sum, number) => {
      return sum + number;
    }, 0);
  },

  addNumberToArray: (numbers, addNumber) => {
    console.log(numbers, addNumber);
    numbers.push(addNumber);
    return numbers;
  },

  removeNumberFromArray: (numbers, removeNumber) => {
    return numbers.filter(number => number !== removeNumber);
  },

  sortArrayAscending: numbers => {
    return numbers.sort((a,b) => a - b);
  },

  sortArrayDescending: numbers => {
    return numbers.sort((a,b) => a - b).reverse();
  }
};
