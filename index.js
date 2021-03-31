// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const prompts = require('prompts');
// // npm i prompts --save

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'fileName',
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
        type: 'checkbox',
        message: 'What kind of license are you using?',
        name: 'license',
        choices: ['x', 'x', 'x', 'x'],
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
    let fileWrite = 
        `# ${data.fileName} \n \n ## Description \n ${data.description} \n \n ## Table of Contents \n  PUT SOME LINKS IN HERE \n \n ## Installation \n ${data.installation} \n \n ## Usage \n ${data.usage} \n \n ## License \n ${data.license} \n \n ## Contribute \n ${data.contributing} \n \n ## Tests \n ${data.tests} \n \n ## Problems \n www.github.com/${data.github} \n E-mail: ${data.email}` ;
    fs.writeFile(fileName, fileWrite, (err) => err ? console.log(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", data)
    });
}

// Function call to initialize app
init();

        //when enter project title, title of read me

        //description (input)
    //table of contents (with links to following sections)
        //installation = instructions (input)
        //usage = usage info  (input)
        //license = (list) (badge for that license is added near the top of the read me and a notice is added to the license section...)
        //contributing = contributing guidelines (input)
        //tests = test instructions (input)
        //questions = (github username entered, link to github profile added to this section) (email address entered, added to this sections)