const Person = require('../src/person');

describe('Person', () => {
  describe('constructor', () => {
    it('creates a person with the given properties', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1992-03-12');
      expect(person.firstName).toEqual('John');
      expect(person.lastName).toEqual('Doe');
      expect(person.age).toEqual(30);
      expect(person.gender).toEqual('male');
      expect(person.birthday).toEqual(new Date('1992-03-12'));
    });
  });

  describe('getName', () => {
    it('returns the full name', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1992-03-12');
      expect(person.getName()).toEqual('John Doe');
    });
  });

  describe('getAge', () => {
    it('returns the age', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1992-03-12');
      expect(person.getAge()).toEqual(30);
    });
  });

  describe('setName', () => {
    it('sets the first and last name', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1992-03-12');
      person.setName('Jane', 'Smith');
      expect(person.getName()).toEqual('Jane Smith');
    });
  });

  describe('setAge', () => {
    it('sets the age', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1992-03-12');
      person.setAge(40);
      expect(person.getAge()).toEqual(40);
    });
  });

  describe('getEarthAge', () => {
    it('returns the age in earth years', () => {
      const person = new Person('John', 'Doe', null, 'male', '1992-03-12');
      expect(person.getEarthAge()).toEqual(31);
    });
  });
  
  describe('getMercuryAge', () => {
    it('returns the age in mercury years', () => {
      const person = new Person('John', 'Doe', null, 'male', '1992-03-12');
      expect(person.getMercuryAge()).toEqual(129);
    });
  });

  describe('getVenusAge', () => {
    it('returns the age in venus years', () => {
      const person = new Person('John', 'Doe', null, 'male', '1990-01-01');
      expect(person.getVenusAge()).toEqual(53);
    });
  });

  describe('getMarsAge', () => {
    it('returns the age in Mars years', () => {
      const person = new Person('John', 'Doe', null, 'male', '1990-01-01');
      expect(person.getMarsAge()).toEqual(17);
    });
  });

  describe('getJupiterAge', () => {
    it('returns the age in Jupiter years', () => {
      const person = new Person('John', 'Doe', null, 'male', '1990-01-01');
      expect(person.getJupiterAge()).toEqual(2);
    });
  });

  describe('getAgeInfo', () => {
    it('returns the age in years as a number', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1990-01-01');
      const ageInYears = person.getAgeInfo();
      const currentYear = new Date().getFullYear();
      const expectedAge = currentYear - 1990;
      expect(ageInYears).toEqual(expectedAge);
    });
  });  
  
  describe('getYearsSinceBirthday', () => {
    it('calculates age on different planets based on a given birthdate', () => {
      const johnDoe = new Person('John', 'Doe', 33, 'male', '1990-01-01');
      const yearsOnPlanets = johnDoe.getYearsSinceBirthday();
  
      expect(yearsOnPlanets).toHaveProperty('earthYears');
      expect(yearsOnPlanets.earthYears).toEqual(33);
      expect(yearsOnPlanets).toHaveProperty('mercuryYears');
      expect(yearsOnPlanets.mercuryYears).toEqual(137.01661679400218);
      expect(yearsOnPlanets).toHaveProperty('venusYears');
      expect(yearsOnPlanets.venusYears).toEqual(53.64133123739855);
      expect(yearsOnPlanets).toHaveProperty('marsYears');
      expect(yearsOnPlanets.marsYears).toEqual(17.545577828514627);
      expect(yearsOnPlanets).toHaveProperty('jupiterYears');
      expect(yearsOnPlanets.jupiterYears).toEqual(2.7818486901918336);
    });
  });
  
  
  describe("getYearsUntilBirthday", () => {
    it("calculates years until next birthday on different planets based on a given birthdate", () => {
      const person = new Person("John", "Doe", new Date("1985-03-25"));
      const returnValue = person.getYearsUntilBirthday();

      const now = new Date();
      const currentYear = now.getFullYear();
      const birthMonth = person.birthday.getMonth();
      const birthDate = person.birthday.getDate();
      const nextBirthday = new Date(currentYear, birthMonth, birthDate);
      if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
      }
      const msUntilBirthday = nextBirthday.getTime() - now.getTime();
      const msPerYear = 31557600000;
      const yearsUntilBirthday = msUntilBirthday / msPerYear;
      const mercuryYears = yearsUntilBirthday / 0.2408467;
      const venusYears = yearsUntilBirthday / 0.61519726;
      const marsYears = yearsUntilBirthday / 1.8808158;
      const jupiterYears = yearsUntilBirthday / 11.862615;

      expect(returnValue).toEqual({
        earthYears: yearsUntilBirthday,
        jupiterYears: jupiterYears,
        marsYears: marsYears,
        mercuryYears: mercuryYears,
        venusYears: venusYears,
      });
    });

    it("calculateBranch", () => {
      const person = new Person("John", "Doe", new Date("1985-03-25"));
      const person2 = new Person("John", "Doe", new Date("1985-05-25"));

      const birthday = new Date(2023, 1, 25);

      const expectedValue = person.calculateBranch(birthday);

      const birthday2 = new Date(2023, 6, 25);

      const expectedValue2 = person2.calculateBranch(birthday2);

      expect(expectedValue).toEqual(1708848000000);
      expect(expectedValue2).toEqual(2);
    });
  });
})
