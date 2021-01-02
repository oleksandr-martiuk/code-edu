class Employee {
   constructor(name, salary, vacation) {
      this._name = name;
      this._salary = salary;
      this._vacation = vacation;
   }
   accept(visitor) {
      visitor.visit(this);
   }

   set salary(sal) {
      this._salary = sal;
   };
   set vacation(vac) {
      this._vacation = vac;
   };

   get name() {
      return this._name;
   };
   get salary() {
      return this._salary;
   };
   get vacation() {
      return this._vacation;
   };
}

class ExtraSalary {
   visit(emp) {
      emp.salary = emp.salary * 1.1;
   }
}

class ExtraVacation {
   visit(emp) {
      emp.vacation = emp.vacation + 2;
   };
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const employees = [
   new Employee("John", 10000, 10),
   new Employee("Mary", 20000, 21),
   new Employee("Boss", 250000, 51)
];

const visitorExtraSalary = new ExtraSalary();
const visitorExtraVacation = new ExtraVacation();

for (let emp of employees) {
   emp.accept(visitorExtraSalary);
   emp.accept(visitorExtraVacation);

   console.log(`${emp.name}: \$${emp.salary} and ${emp.vacation} vacation days`);
}
