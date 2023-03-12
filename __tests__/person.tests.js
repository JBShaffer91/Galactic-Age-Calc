const Person = require('../src/person');

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('John', 'Doe', 30, 'male');
  });

  describe('getName', () => {
    it('returns the full name', () => {
      expect(person.getName()).toEqual('John Doe');
    });
  });

  describe('getAge', () => {
    it('returns the age', () => {
      expect(person.getAge()).toEqual(30);
    });
  });

  describe('setName', () => {
    it('sets the first and last name', () => {
      person.setName('Jane', 'Smith');
      expect(person.getName()).toEqual('Jane Smith');
    });
  });

  describe('setAge', () => {
    it('sets the age', () => {
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
      expect(person.getMercuryAge()).toEqual(125);
    });
  });

  describe('getVenusAge', () => {
    it('returns the age in venus years', () => {
      expect(person.getVenusAge()).toEqual(48);
    });
  });

  describe('getMarsAge', () => {
    it('returns the age in mars years', () => {
      expect(person.getMarsAge()).toEqual(15);
    });
  });

  describe('getJupiterAge', () => {
    it('returns the age in jupiter years', () => {
      expect(person.getJupiterAge()).toEqual(2);
    });
  });

  describe('getYearsSinceBirthday', () => {
    it('returns the correct number of years since the given birthday', () => {
      const result = person.getYearsSinceBirthday('1990-01-01');
      expect(result.earthYears).toBeCloseTo(30);
      expect(result.mercuryYears).toBeCloseTo(125);
      expect(result.venusYears).toBeCloseTo(48.387);
      expect(result.marsYears).toBeCloseTo(15.957);
      expect(result.jupiterYears).toBeCloseTo(2.528);
    });
  });
  
  describe('getYearsUntilBirthday', () => {
    it('returns the correct number of years until the given birthday', () => {
      const result = person.getYearsUntilBirthday('1990-01-01');
      expect(result.earthYears).toBeCloseTo(5.25);
      expect(result.mercuryYears).toBeCloseTo(21.875);
      expect(result.venusYears).toBeCloseTo(8.4677);
      expect(result.marsYears).toBeCloseTo(2.8085);
      expect(result.jupiterYears).toBeCloseTo(0.4465);
    });
  });
});  