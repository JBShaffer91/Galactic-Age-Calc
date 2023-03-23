class Person {
  constructor(firstName, lastName, age, gender, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.birthday = new Date(birthday);
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
    return Math.floor(this.getEarthAge() / mercuryYear);
  }

  getVenusAge() {
    const venusYear = 0.62;
    return Math.floor(this.getEarthAge() / venusYear);
  }

  getMarsAge() {
    const marsYear = 1.88;
    return Math.floor(this.getEarthAge() / marsYear);
  }  

  getJupiterAge() {
    const jupiterYear = 11.86;
    return Math.floor(this.getEarthAge() / jupiterYear);
  }

  getAgeInfo() {
    const birthDate = this.birthday;
    const ageInMs = Date.now() - birthDate.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.round(ageInYears);
  }  

  getYearsSinceBirthday() {
    const now = new Date();
    const diff = now.getTime() - this.birthday.getTime(); // get time in milliseconds
    const earthYears = Math.floor(diff / 31557600000);
    const mercuryYears = earthYears / 0.2408467;
    const venusYears = earthYears / 0.61519726;
    const marsYears = earthYears / 1.8808158;
    const jupiterYears = earthYears / 11.862615;
    return {
      earthYears: earthYears,
      mercuryYears: mercuryYears,
      venusYears: venusYears,
      marsYears: marsYears,
      jupiterYears: jupiterYears,
    };
  }
  
  getYearsUntilBirthday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthMonth = this.birthday.getMonth();
    const birthDate = this.birthday.getDate();
    const nextBirthday = new Date(currentYear, birthMonth, birthDate);

    const branch = this.calculateBranch(nextBirthday, now, currentYear);

    const msUntilBirthday = branch.getTime() - now.getTime();
    const msPerYear = 31557600000;
    const yearsUntilBirthday = msUntilBirthday / msPerYear;
    const mercuryYears = yearsUntilBirthday / 0.2408467;
    const venusYears = yearsUntilBirthday / 0.61519726;
    const marsYears = yearsUntilBirthday / 1.8808158;
    const jupiterYears = yearsUntilBirthday / 11.862615;
    return {
      earthYears: yearsUntilBirthday,
      mercuryYears: mercuryYears,
      venusYears: venusYears,
      marsYears: marsYears,
      jupiterYears: jupiterYears,
    };
  }

  calculateBranch(nextBirthday, now, currentYear) {
    // const now = new Date();
    // const currentYear = now.getFullYear();

    if (nextBirthday < now) {
      return nextBirthday.setFullYear(currentYear + 1);
    } else {
      return nextBirthday;
    }
  } 
}

module.exports = Person;
