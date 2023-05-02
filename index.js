const inquirer = require('inquirer');
const CEO = require('CEO');
const Chief = require('./lib/Chief');
const ExecutiveSecretary = require('./lib/Executive Secretary');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const CSR = require('./lib/CSR');
const Ambassadors = require('./lib/Ambassadors');
const Angel = require('./lib/Angel');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];


// Prompt user to add a team member or generate the HTML
function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add an engineer, add an intern, or generate the team roster?',
            name: 'action',
            choices: ['Add an engineer', 'Add an intern', 'Generate team roster'],
        },
        ])
    
    .then((actionData) => {
        switch (actionData.action) {
            case 'Add an engineer':
            promptEngineer();
            break;
            case 'Add an intern':
            promptIntern();
            break;
            case 'Generate team roster':
            generateHTML(teamMembers);
            break;
        }
        });
    }
    

// Prompt user for CEO information
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of the CEO?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the ID of the CEO?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the CEO?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of the CEO?',
        name: 'officeNumber',
    },
    ])

.then((ceoData) => {
    const CEO = new CEO(
        ceoData.name,
        ceoData.id,
        ceoData.email,
        ceoData.officeNumber
    );

    teamMembers.push(ceo);
    addTeamMember();
    });

// Prompt user for chief information
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of the team chief?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the ID of the team manachiefger?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the team chief?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of the team chief?',
        name: 'officeNumber',
    },
    ])

.then((chiefData) => {
    const manager = new Chief(
        chiefData.name,
        chiefData.id,
        chiefData.email,
        chiefData.officeNumber
    );

    teamMembers.push(chief);
    addTeamMember();
    });


    // Prompt user for executive secretary information
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of the executive secretary?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the ID of the executive secretary?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the executive secretary?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of the executive secretary?',
        name: 'officeNumber',
    },
    ])

.then((execsecData) => {
    const manager = new Manager(
        execsecData.name,
        execsecData.id,
        execsecData.email,
        execsecData.officeNumber
    );

    teamMembers.push(execsec);
    addTeamMember();
    });

// Prompt user for manager information
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the name of the team manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the ID of the team manager?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the team manager?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of the team manager?',
        name: 'officeNumber',
    },
    ])

.then((managerData) => {
    const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
    );

    teamMembers.push(manager);
    addTeamMember();
    });


// Prompt user for engineer information
function promptEngineer() {
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the ID of the engineer?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email address of the engineer?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'What is the GitHub username of the engineer?',
        name: 'github',
    },
    ])

.then((engineerData) => {
    const engineer = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
    );
teamMembers.push(engineer);
    addTeamMember();
    });
}

// Prompt user for intern information
function promptIntern() {
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name',
    },

    {
        type: 'input',
        message: 'What is the ID of the intern?',
        name: 'id',
    },
        {
        type: 'input',
        message: 'What is the email address of the intern?',
        name: 'email',
        },

        {
        type: 'input',
        message: 'What is the school of the intern?',
        name: 'school',
        }, 
    ])

.then((internData) => {
    const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
    );
    teamMembers.push(intern);
    addTeamMember();
);}
