import { array } from "prop-types";

export const fncs = {
  calculateSumOfNumbers: numbers => {
    let sum = 0;

    for (let number of numbers) {
      sum += number;
    }

    return sum;
  },

  getBiggestNumber: numbers => {
    let biggestNumber = numbers[0];

    for (let number of numbers) {
      if (number > biggestNumber) {
        biggestNumber = number;
      }
    }

    return biggestNumber;
  },

  getSmallestNumber: numbers => {
    let smallestNumber = numbers[0];

    for (let number of numbers) {
      if (number < smallestNumber) {
        smallestNumber = number;
      }
    }

    return smallestNumber;
  },

  getSecondBiggestNumber: numbers => {
    let biggestNumber;
    let secondBiggestNumber;

    if (numbers[0] > numbers[1]) {
      biggestNumber = numbers[0];
      secondBiggestNumber = numbers[1];
    } else {
      biggestNumber = numbers[1];
      secondBiggestNumber = numbers[0];
    }

    for (let number of numbers) {
      if (number > biggestNumber) {
        secondBiggestNumber = biggestNumber;
        biggestNumber = number;
      }
      if (number > secondBiggestNumber && number < biggestNumber) {
        secondBiggestNumber = number;
      }
    }

    return secondBiggestNumber;
  },

  calculateSumOfOddNumbers: numbers => {
    let sum = 0;

    for (let number of numbers) {
      if (number % 2 != 0) {
        sum += number
      }
    }

    return sum;
  },

  calculateSumOfEvenNumbers: numbers => {
    let sum = 0;

    for (let number of numbers) {
      if (number % 2 == 0) {
        sum += number;
      }
    }

    return sum;
  },

  addNumberToArray: (numbers, addNumber) => {
    numbers[numbers.length] = addNumber;
    return numbers;
  },

  removeNumberFromArray: (numbers, removeNumber) => {
    let newArray = [];

    for (let number of numbers) {
      if (number != removeNumber) {
        newArray[newArray.length] = number;
      }
    }

    return newArray;
  },

  sortArrayAscending: numbers => {
    let newArray = numbers;

    for (let i = numbers.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (newArray[j] > newArray[j + 1]) {
          let help = newArray[j];

          newArray[j] = newArray[j + 1];
          newArray[j + 1] = help;
        }
      }
    }

    return newArray;
  },

  sortArrayDescending: numbers => {
    let newArray = numbers;

    for (let i = numbers.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (newArray[j] < newArray[j + 1]) {
          let help = newArray[j + 1];

          newArray[j + 1] = newArray[j];
          newArray[j] = help;
        }
      }
    }

    return newArray;
  }
};
