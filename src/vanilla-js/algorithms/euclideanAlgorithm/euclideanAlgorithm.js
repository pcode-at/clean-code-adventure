// https://www.lernhelfer.de/schuelerlexikon/mathematik/artikel/euklidischer-algorithmus
export const getGgtUsingEuclideanAlgorithm = (numberOne = 0, numberTwo = 0) => {
    let smallNum;
    let greatNum;
    let rack;

    if (numberOne > numberTwo) {
        greatNum = numberOne;
        smallNum = numberTwo;
    } else {
        greatNum = numberTwo;
        smallNum = numberOne;
    }

    while (greatNum % smallNum !== 0) {
        rack = greatNum % smallNum;

        greatNum = smallNum;
        smallNum = rack;
    }
    return smallNum;
};