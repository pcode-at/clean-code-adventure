// https://www.lernhelfer.de/schuelerlexikon/mathematik/artikel/euklidischer-algorithmus
export const getGgtUsingEuclideanAlgorithm = (numberOne = 0, numberTwo = 0) => {
  let greaterNumber;
  let smallerNumber;

  if (numberOne > numberTwo) {
    greaterNumber = numberOne;
    smallerNumber = numberTwo;
  } else {
    greaterNumber = numberTwo;
    smallerNumber = numberOne;
  }

  while (greaterNumber % smallerNumber != 0) {
    let residual = greaterNumber % smallerNumber;

    greaterNumber = smallerNumber;
    smallerNumber = residual;
  }

  return smallerNumber;
};
