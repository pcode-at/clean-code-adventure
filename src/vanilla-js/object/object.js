export const fncs = {
  getFirstNameOfPerson: (person) => {

    return person.firstName;
  },

  getFirstNameAndLastNameOfPerson: (person) => {

    return person.firstName.concat(" ", person.lastName);
  },

  getAgeOfPerson: (person, date) => {
    let today = [date.getDate(), date.getMonth(), date.getFullYear()];
    let birthday = person.dateOfBirth.split('.');
    let age = today[2] - parseInt(birthday[2]);
    if (today[1] >= parseInt(birthday[1])) {
      if (today[1] === parseInt(birthday[1]) && today[0] < parseInt(birthday[0])) {
        return age - 1;
      }
      else {
        return age;
      }
    }
    else{
      return age - 1;
    }
  }
}