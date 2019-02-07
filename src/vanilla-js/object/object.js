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

        if (isMonthLowerThan() || isMonthEqualTo() && isDayLowerThan() || isDayEqualTo()) {
            return currentAge - 1;
        }

        function isMonthLowerThan() {
            if (localDate.getMonth() < person.dateOfBirth.getMonth()) {
                return true;
            }
        }

        function isMonthEqualTo() {
            if (localDate.getMonth() === person.dateOfBirth.getMonth()) {
                return true;
            }
        }

        function isDayLowerThan() {
            if (localDate.getDay < person.dateOfBirth.getDay) {
                return true;
            }
        }

        function isDayEqualTo() {
            if (localDate.getDay === person.dateOfBirth.getDay) {
                return true;
            }
        }
    }
};
