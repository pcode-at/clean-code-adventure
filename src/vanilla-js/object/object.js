export const fncs = {
  getFirstNameOfPerson: (person) => {
    return person.firstName;
  },

  getFirstNameAndLastNameOfPerson: (person) => {
    return person.firstName + ' ' + person.lastName;
  },

  getAgeOfPerson: (person) => {
    return 2018 - parseInt(person.dateOfBirth.split('.')[2]);
  }
};