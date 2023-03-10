class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

    getAge() {
    return this.age;
  }

  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

module.exports = Person;
