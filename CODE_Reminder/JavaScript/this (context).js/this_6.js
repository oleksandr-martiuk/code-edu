const students = ['J', 'P', 'A'];
const title = "[GLOBAL] Our Group";

const group = {
   title: "Our Group",
   students: ["John", "Pete", "Alice"],

   showStudentsObjFun(){
      console.log(this.students);
   },
   showStudentsFun: function(){
      console.log(this.students);
   },
   showStudentsArrowSun: () => {
      console.log(this.students);
   },

   showListArrowFunc() {
      this.students.forEach(student => {
         console.log(this.title + ': ' + student)
      });
   },

   showListFunc() {
      const title = '[LOCAL] title';
      this.students.forEach(function(student) {
         console.log(this.title + ': ' + student)
      });
   }
};

group.showStudentsObjFun();   // [ 'John', 'Pete', 'Alice' ]
group.showStudentsFun();      // [ 'John', 'Pete', 'Alice' ]
group.showStudentsArrowSun(); // undefined

group.showListArrowFunc();
// Our Group: John
// Our Group: Pete
// Our Group: Alice

group.showListFunc();
// undefined: John
// undefined: Pete
// undefined: Alice
