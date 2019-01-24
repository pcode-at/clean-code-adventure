export const fncs = {
  getFirstNameOfPerson: (person) => {
    return person.firstName;
  },

  getFirstNameAndLastNameOfPerson: (person) => {
    return person.firstName + ' ' + person.lastName;
  },

  getAgeOfPerson: (person) => {
    let currentDate = new Date();
    let dateOfBirth = new Date(parseInt(person.dateOfBirth.split('.')[2]), parseInt(person.dateOfBirth.split('.')[1]) - 1, parseInt(person.dateOfBirth.split('.')[0]));
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    if (currentDate.getMonth() < dateOfBirth.getMonth() || currentDate.getMonth() === dateOfBirth.getMonth() && currentDate.getDate() < dateOfBirth.getDate()) {
      age--;
    }

    return age;
  }
};