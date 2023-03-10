const Person = require('../src/person.js');

test('should fail', () => {
  expect(true).toBe(false);
});

test('should pass', () => {
  expect(true).toBe(true);
});

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
