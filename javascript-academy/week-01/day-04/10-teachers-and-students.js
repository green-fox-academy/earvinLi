'use strict';

class Student {
  constructor(subject) { this.subject = subject }

  learn() { console.log(`I'm studying ${this.subject}.`); }

  question(teacher) { teacher.answer(this.subject); }
}

class Teacher {
  teach(student) { student.learn(); }

  answer(subject) { console.log(`I'm answering my student's ${subject} question.`); }
}

const studentOne = new Student('Math');
const teacherOne = new Teacher();

studentOne.question(teacherOne);
teacherOne.teach(studentOne);
