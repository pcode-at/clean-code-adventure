export const fncs = {
    getFirstNameOfPerson: (person) => {
        return person.firstName;
    },

    getFirstNameAndLastNameOfPerson: (person) => {
        return person.firstName + " " + person.lastName;
    },

    getAgeOfPerson: (person) => {
        const localDate = new Date();
        let date = person.dateOfBirth.split('.');
        person.dateOfBirth = new Date(parseInt(date[2]), parseInt(date[1]), parseInt(date[0]) - 1);
        let currentAge = localDate.getFullYear() - person.dateOfBirth.getFullYear();

        if (localDate.getMonth() < person.dateOfBirth.getMonth() || localDate.getMonth() === person.dateOfBirth.getMonth() && localDate.getDay < person.dateOfBirth.getDay || localDate.getDay === person.dateOfBirth.getDay) {
            currentAge--;
        }
        return currentAge;
    }
};