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

  setAge(newAge) {
    this.age = newAge;
  }  

  getMercuryAge() {
    const mercuryYear = 0.24;
    return Math.floor(this.age / mercuryYear);
  }

  getVenusAge() {
    return this.age / 0.62;
  }

  getMarsAge() {
    const marsYear = 1.88;
    return Math.floor(this.age / marsYear);
  }
}

module.exports = Person;
