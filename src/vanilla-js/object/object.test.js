import { fncs } from "./object";

describe("oject", () => {
  describe("level-1", () => {
    const person = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "03.09.1968"
    };

    it('should return the value of the property "firstName" of the object "person"', () => {
      expect(fncs.getFirstNameOfPerson(person)).toBe("John");
    });
    it('should return the firstName and lastName of the object "person"', () => {
      expect(fncs.getFirstNameAndLastNameOfPerson(person)).toBe("John Doe");
    });
    it('should return the age of the person' , () => {
      let date = new Date(2019, 9, 5);
      expect(fncs.getAgeOfPerson(person, date)).toBe(51);
    });
  });
});
