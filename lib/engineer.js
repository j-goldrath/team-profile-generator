// Import the Employee parent class
const Employee = require('./employee');
// Create an `Intern` class that extends the `Employee` class
class Engineer extends Employee {
  constructor(id, school) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    console.log(`Github: ${this.school}`);
  }

  getRole() {
    console.log(`Role: ${this.constructor.name}`);
  }
}