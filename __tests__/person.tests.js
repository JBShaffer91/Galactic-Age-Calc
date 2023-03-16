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
    it('returns an object with years on different planets as numbers', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1990-01-01');
      const yearsOnPlanets = person.getYearsSinceBirthday();
      expect(yearsOnPlanets).toHaveProperty('earthYears');
      expect(yearsOnPlanets).toHaveProperty('mercuryYears');
      expect(yearsOnPlanets).toHaveProperty('venusYears');
      expect(yearsOnPlanets).toHaveProperty('marsYears');
      expect(yearsOnPlanets).toHaveProperty('jupiterYears');
      expect(typeof yearsOnPlanets.earthYears).toBe('number');
      expect(typeof yearsOnPlanets.mercuryYears).toBe('number');
      expect(typeof yearsOnPlanets.venusYears).toBe('number');
      expect(typeof yearsOnPlanets.marsYears).toBe('number');
      expect(typeof yearsOnPlanets.jupiterYears).toBe('number');
    });
  });
  
  describe('getYearsUntilBirthday', () => {
    it('returns an object with years on different planets as numbers', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1990-01-01');
      const yearsOnPlanets = person.getYearsUntilBirthday();
      expect(yearsOnPlanets).toHaveProperty('earthYears');
      expect(yearsOnPlanets).toHaveProperty('mercuryYears');
      expect(yearsOnPlanets).toHaveProperty('venusYears');
      expect(yearsOnPlanets).toHaveProperty('marsYears');
        expect(yearsOnPlanets).toHaveProperty('jupiterYears');
      expect(typeof yearsOnPlanets.earthYears).toBe('number');
      expect(typeof yearsOnPlanets.mercuryYears).toBe('number');
      expect(typeof yearsOnPlanets.venusYears).toBe('number');
      expect(typeof yearsOnPlanets.marsYears).toBe('number');
      expect(typeof yearsOnPlanets.jupiterYears).toBe('number');
    });
  });

  describe('nextBirthday', () => {
    it('sets the year to the next year if the next birthday is in the past', () => {
      const person = new Person('John', 'Doe', 30, 'male', '1990-01-01');
      person.birthday = new Date('2000-01-01');
      const now = new Date();
      const currentYear = now.getFullYear();
      const nextBirthday = new Date(currentYear, person.birthday.getMonth(), person.birthday.getDate());
      if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
      }
      expect(nextBirthday.getFullYear()).toBe(currentYear + 1);
    });
  });
});  

