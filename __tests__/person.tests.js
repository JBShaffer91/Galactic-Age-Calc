const Person = require('../src/person');

test('should create a Person object with the correct properties', () => {
  const person = new Person('John', 'Doe', 30, 'male');
  expect(person.firstName).toBe('John');
  expect(person.lastName).toBe('Doe');
  expect(person.age).toBe(30);
  expect(person.gender).toBe('male');
});

test('should return the person name', () => {
  const person = new Person('John', 'Doe', 30);
  expect(person.getName()).toBe('John Doe');
});

test('should return the person age', () => {
  const person = new Person('Alice', '', 30, '');
  expect(person.getAge()).toBe(30);
});

test('should set the person name', () => {
  const person = new Person('John', 'Doe', 30);
  expect(person.getName()).toBe('John Doe');

  person.setName('Jane', 'Doe');
  expect(person.firstName).toBe('Jane');
  expect(person.lastName).toBe('Doe');
  expect(person.getName()).toBe('Jane Doe');
});

test('should set the person age', () => {
  const person = new Person('Alice', 'Smith', 25, 'female');
  expect(person.getAge()).toBe(25);
  person.setAge(30);
  expect(person.getAge()).toBe(30);
});

test('should return age in Mercury years', () => {
  const person = new Person('John', 'Doe', 24, 'male');
  expect(person.getMercuryAge()).toBeCloseTo(100, 0);
});

test('should return age in Venus years', () => {
  const person = new Person('John', 'Doe', 24, 'male');
  const earthAge = 24;
  const venusAge = earthAge / 0.62;
  expect(person.getVenusAge()).toBeCloseTo(venusAge, 2);
});
