// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Add a description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What instructions are needed for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What instructions or information is needed for usage?',
        name: 'usage',
    },
    {  
        type: 'list',
        message: 'Do you want to add a license?',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'IBM', 'None'],
    },
    {
        type: 'input',
        message: 'What guidelines would you like to add for contributors?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let fileWrite = generateMarkdown.generateMarkdown(data);
    fs.writeFile(fileName, fileWrite, (err) => err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", data) //replace data with readmeText
    });
}

// Function call to initialize app
init();

/* 
                           ::PROJECT REQS::
        when enter project title, title of read me

        description (input)
        table of contents (with links to following sections)
        installation = instructions (input)
        usage = usage info  (input)
        license = (list) (badge for that license is added near the top of the read me and a notice is added to the license section...)
        contributing = contributing guidelines (input)
        tests = test instructions (input)
        questions = (github username entered, link to github profile added to this section) (email address entered, added to this sections) */