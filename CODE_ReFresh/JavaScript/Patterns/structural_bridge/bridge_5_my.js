/**
  * "Bridge" is created between:
  * 1. Course' & Level
  * 2. Student & Course
  **/

class StudentInterface {
   constructor(firstName, surName) {
      this.firstName = firstName;
      this.surName = surName;
   }
   getAssignedCourse = () => {
      throw 'method getAssignedCourse() not implemented yet';
   }
   getFullName = () => {
      throw 'method getFullName() not implemented yet';
   }
}

class Student extends StudentInterface {
   constructor(firstName, surName, course) {
      super(firstName, surName);
      this.course = course;
   }
   getAssignedCourse = () => {
      const studentName = this.getFullName();
      const assignedCourse = this.course.getCourse();
      let msg = '';

      if (studentName) {
         msg = assignedCourse
            ? `${studentName} is assigned to the ${assignedCourse}`
            : `${studentName} is not assigned to any of courses yet`;
      } else {
         msg = `We don't know who you are :)`
      }
      console.log(msg);
   }
   getFullName = () => [this.firstName, this.surName].join(' ');
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class CourseInterface {
   constructor(name = 'JavaScript', level, type) {
      this.courseName = name;
      this.level = level;
      this.type = type;
   }
   getCourse = () => {
      const levelMsg = this.level ? `${this.level.getLevel()} level` : null;
      const courseMsg = (levelMsg && this.courseName) ? `"${this.courseName}" course` : null;

      return (levelMsg && courseMsg) ? `${levelMsg} of ${courseMsg}` : null;
   }
}

class VideoCourse extends CourseInterface {
   constructor(name, level) {
      super(name, level, 'video course');
   }
}

class TutorClasses extends CourseInterface {
   constructor(name, level) {
      super(name, level, 'tutor classes');
   }
}

class OnlineCourse extends CourseInterface {
   constructor(name, level) {
      super(name, level, 'online course');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class LevelInterface {
   constructor(level) {
      this.level = level;
   }
   getLevel = () => this.level;
}

class Basic extends LevelInterface {
   constructor() {
      super('basic');
   }
}

class Middle extends LevelInterface {
   constructor() {
      super('middle');
   }
}

class Senior extends LevelInterface {
   constructor() {
      super('senior');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const JAVA = 'Java';
const CPP = 'C++';
const JS = 'JavaScript';

const basic = new Basic();
const middle = new Middle();
const senior = new Senior();

const onlineJavaMiddle = new OnlineCourse(JAVA, middle);
const tutorCppSenior = new TutorClasses(CPP, senior);
const tutorJSBasic = new TutorClasses(JS, basic);

const joeBlack = new Student('Joe', 'Black', onlineJavaMiddle);
const ivanIvanov = new Student('Ivan', 'Ivanov', tutorCppSenior);
const timBroncs = new Student('Tim', 'Broncs', tutorJSBasic);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const students = [timBroncs, joeBlack, ivanIvanov];
students.forEach(student => student.getAssignedCourse());
