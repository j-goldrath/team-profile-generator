// Import required external modules
const inquirer = require('inquirer');
const fs = require('fs');

// Import required local modules
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// Create empty array to hold employee objects as team members are added
const newTeam = [];

// Prompt user for new manager information
function addManager() {

    const managerPrompts = [
        {
            message: 'Please enter the name of the team manager:',
            name: 'managerName',
        },
        {
            message: 'Please enter an ID number for the manager:',
            name: 'managerId',
        },
        {
            message: 'Please enter an email address for the manager:',
            name: 'managerEmail',
        },
        {
            message: 'Please enter an office number for the manager:',
            name: 'managerOfficeNumber',
        }
    ];

    inquirer
        .prompt(managerPrompts)
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            newTeam.push(manager);
            askWhatNext();
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log(error)
            }
        });

}

// Prompt user for new engineer information
function addEngineer() {

    const engineerPrompts = [
        {
            message: 'Please enter the name of the engineer:',
            name: 'engineerName',
        },
        {
            message: 'Please enter an ID number for the engineer:',
            name: 'engineerId',
        },
        {
            message: 'Please enter an email address for the engineer:',
            name: 'engineerEmail',
        },
        {
            message: 'Please enter a github username for the engineer:',
            name: 'engineerGithub',
        },
    ];

    inquirer
        .prompt(engineerPrompts)
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            newTeam.push(engineer);
            askWhatNext();
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log(error)
            }
        });

}

// Prompt user for new intern information
function addIntern() {

    const internPrompts = [
        {
            message: 'Please enter the name of the intern:',
            name: 'internName',
        },
        {
            message: 'Please enter an ID number for the intern:',
            name: 'internId',
        },
        {
            message: 'Please enter an email address for the intern:',
            name: 'internEmail',
        },
        {
            message: 'Please enter a school for the intern:',
            name: 'internSchool',
        },
    ];

    inquirer
        .prompt(internPrompts)
        .then((response) => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            newTeam.push(intern);
            askWhatNext();
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log(error)
            }
        });

}

// Ask user whether they want to add another employee or finish building team
function askWhatNext() {

    const whatNextPrompt = [
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team'],
            name: 'whatNext',
        },
    ];

    inquirer
        .prompt(whatNextPrompt)
        .then((response) => {
            if (response.whatNext === 'Add an Engineer') {
                addEngineer();
            } else if (response.whatNext === 'Add an Intern') {
                addIntern();
            } else {
                console.log(newTeam);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log(error)
            }
        });

}

addManager();
