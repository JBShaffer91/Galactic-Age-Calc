class Person {
  constructor(firstName, lastName, age, gender, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.birthday = birthday;
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

  getEarthAge() {
    const ageInMillis = new Date() - new Date(this.birthday);
    const ageInYears = ageInMillis / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(ageInYears);
  }  

  getMercuryAge() {
    const mercuryYear = 0.24;
    return Math.floor(this.age / mercuryYear);
  }

  getVenusAge() {
    const venusYear = 0.62;
    return Math.floor(this.age / venusYear);
  }

  getMarsAge() {
    const marsYear = 1.88;
    return Math.floor(this.age / marsYear);
  }

  getJupiterAge() {
    const jupiterYear = 11.86;
    return Math.floor(this.age / jupiterYear);
  }

  getYearsSinceBirthday() {
    const earthYear = 365.25;
    const ageInDays = (new Date() - new Date(this.birthday)) / (24 * 60 * 60 * 1000);
    const ageInYears = ageInDays / earthYear;
    return {
      earthYears: this.age - ageInYears,
      mercuryYears: (this.age / 0.24) - (ageInYears / 0.24),
      venusYears: (this.age / 0.62) - (ageInYears / 0.62),
      marsYears: (this.age / 1.88) - (ageInYears / 1.88),
      jupiterYears: (this.age / 11.86) - (ageInYears / 11.86),
    };
  }

  getYearsUntilBirthday() {
    const earthYear = 365.25;
    const today = new Date();
    const birthDate = new Date(this.birthday);
    birthDate.setFullYear(today.getFullYear());
    if (birthDate.getTime() < today.getTime()) {
      birthDate.setFullYear(today.getFullYear() + 1);
    }
    const ageInDays = (birthDate - today) / (24 * 60 * 60 * 1000);
    const ageInYears = ageInDays / earthYear;
    return {
      earthYears: ageInYears,
      mercuryYears: ageInYears / 0.24,
      venusYears: ageInYears / 0.62,
      marsYears: ageInYears / 1.88,
      jupiterYears: ageInYears / 11.86,
    };
  }
}

module.exports = Person;
