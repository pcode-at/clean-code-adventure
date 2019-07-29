// https://www.lernhelfer.de/schuelerlexikon/mathematik/artikel/euklidischer-algorithmus
export const getGgtUsingEuclideanAlgorithm = (numberOne = 0, numberTwo = 0) => {
  let q = Math.floor(numberOne/numberTwo);6666
  let remainder = numberOne % (q * numberTwo);
  console.log(remainder);
  if(remainder === 0){
    return numberTwo;
  }
  else{
    return getGgtUsingEuclideanAlgorithm(numberTwo, remainder);
  }
}
