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
                console.log(newTeam);  // check contents of newTeam object array via console log
                generateTeamProfilePage(newTeam);
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

// Generate team profile webpage file using employee objects generated while building team
function generateTeamProfilePage(objArray) {

    const pageTop = `<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Page</title>
</head>
    
<body>
    <nav class="navbar sticky-top navbar-light bg-danger text-white">
        <div class="container justify-content-center">
            <h1>My Team<h1>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row g-0 justify-content-center">
    
        `

    fs.writeFile('./dist/team-profile-page.html', pageTop, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

    objArray.forEach((employee) => {

        let employeeSpecificInfo = '';

        if (employee.constructor.name === 'Manager') {
          employeeSpecificInfo = `Office Number: ${employee.officeNumber}`;
        }
        if (employee.constructor.name === 'Engineer') {
          employeeSpecificInfo = `Github: https://github.com/${employee.github}`;
        }
        if (employee.constructor.name === 'Intern') {
          employeeSpecificInfo = `School: ${employee.school}`;
        }

        const cardTemplate = `    <div class="card m-4" style="width: 18rem; filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));">
        <div class="card-header bg-primary text-white">
            <h3>${employee.name}</h3>
            <h4>${employee.constructor.name}</h4>
        </div>
        <div class="card-body">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">${employeeSpecificInfo}</li>
                </ul>
            </div>
        </div>
    </div>

    `

    fs.appendFile('./dist/team-profile-page.html', cardTemplate, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

    });

    const pageBottom = `    </div>
        </div>
</body>

</html>`

    fs.appendFile('./dist/team-profile-page.html', pageBottom, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

}


// Start process by prompting user to add manager to the team
addManager();
