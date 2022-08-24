console.clear();

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    console.log(`${this.firstname} ${this.lastname}`);
  }

  email() {
    console.log(
      `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
    );
  }
  firstName() {
    console.log(`${this.firstname}`);
  }
}

let emp1 = new Employee("John", "Smith");
emp1.fullname(); // "John Smith"

let emp2 = new Employee("Mary", "Sue");
emp2.email(); // "mary.sue@company.com"

let emp3 = new Employee("Antony", "Walker");
emp3.firstName(); // "Antony"
