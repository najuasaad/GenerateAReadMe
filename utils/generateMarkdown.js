// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//generate markdown is a function -- template for the markdown
//figure out how to do anchor links
function generateMarkdown(data) {
  return `# ${data.title} \n  
## Description 
${data.description} 

## Table of Contents  \n 
  [Installation](#Installation)  \n 
  [Usage](#Usage) \n 
  [License](#License) \n 
  [Contribute](#Contribute) \n 
  [Tests](#Tests) \n 
  [Problems](#Problems)  \n 

## Installation
${data.installation} 

## Usage 
${data.usage}

## License 
${data.license}

## Contribute 
${data.contributing}

## Tests 
${data.tests} 

## Problems
Contact via e-mail: ${data.email} \n
Or visit www.github.com/${data.github}`
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection }
