// Import the Employee parent class
const Employee = require('./employee');
// Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    // console.log(`Github: ${this.github}`);
    return this.github;
  }

  getRole() {
    // console.log(`Role: ${this.constructor.name}`);
    return this.constructor.name;
  }
}
module.exports = Engineer;