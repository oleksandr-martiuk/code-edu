class JavaScript {
   constructor(name) {
      this.name = name;
      this.type = 'language';
   }
}

class TypeScript {
   constructor(name) {
      this.name = name;
      this.type = 'language';
   }
}

class CleanCode {
   constructor() {
      this.name = 'Clean Code';
      this.type = 'programming rules';
   }
}

class CleanArchitecture {
   constructor() {
      this.name = 'Clean Architecture';
      this.type = 'architecture';
   }
}

class CourseFactory {
   create(name) {
      if       (name === 'JavaScript')    return new JavaScript(name);
      else if  (name === 'TypeScript')    return new TypeScript(name);
      else if  (name === 'CleanCode')     return new CleanCode();
      else if  (name === 'Architecture')  return new CleanArchitecture();
   }
}

const courseFactory = new CourseFactory();

const course = courseFactory.create('TypeScript');
console.log(course.name);
