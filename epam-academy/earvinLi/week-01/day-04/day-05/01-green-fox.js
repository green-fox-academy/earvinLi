'use strict';

// Person
class Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getGoal() {
    return console.log('My goal is: Live for the moment!');
  }

  introduce() {
    return console.log(`Hi, I'm ${this.name}, a ${this.age}-year old ${this.gender}.`);
  }
}

// Student
class Student extends Person {
  constructor(name, age, gender, previousOrganization = 'The School of Life', skippedDays = 0) {
    super(name, age, gender);

    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    return console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    return console.log(`Hi, I'm ${this.name}, a ${this.age}-year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} day(s) from the course already.`);
  }

  skipDays(numberOfDays) {
    return this.skippedDays += numberOfDays;
  }
}

// Mentor
class Mentor extends Person {
  constructor(name, age, gender, level = 'intermediate') {
    super(name, age, gender);

    this.level = level;
  }

  getGoal() {
    return console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    return console.log(`Hi, I'm ${this.name}, a ${this.age}-year old ${this.gender} ${this.level} mentor.`);
  }
}

// Sponsor
class Sponsor extends Person {
  constructor(name, age, gender, company = 'Google', hiredStudents = 0) {
    super(name, age, gender);

    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  getGoal() {
    return console.log('My goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    return console.log(`Hi, I'm ${this.name}, a ${this.age}-year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} student(s) so far.`);
  }

  hire() {
    return this.hiredStudents += 1;
  }
}


// Cohort
class Cohort {
  constructor(name, students, mentors) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student) {
    return this.students.push(student);
  }

  addMentor(mentor) {
    return this.mentors.push(mentor);
  }

  info() {
    return console.log(`The ${this.name} has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

// Test
const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
