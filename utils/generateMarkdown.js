// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  //pass in license choice ---DID THIS IN THE CALL 
  //grab badge and return
  //if statement returning license agreement

  if (data === "MIT" ) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);"
  } else if (data === "Mozilla" ) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (data === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data === "MIT" ) {
    return "https://opensource.org/licenses/MIT"
  } else if (data === "Mozilla" ) {
    return "https://www.mozilla.org/en-US/MPL/2.0/"
  } else if (data === "IBM") {
    return "https://opensource.org/licenses/IPL-1.0"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  let licenseLink = renderLicenseLink(data);
  
  if (data === "MIT" ) {
    return `This project uses [the MIT License](${licenseLink})`
  } else if (data === "Mozilla" ) {
    return `This project uses [Mozilla Public License 2.0](${licenseLink})`
  } else if (data === "IBM") {
    return `This project uses [IBM Punlic License Version 1.0](${licenseLink})`
  } else {
    return "No License data available"
  }
}

// TODO: Create a function to generate markdown for README
//generate markdown is a function -- template for the markdown
//figure out how to do anchor links
function generateMarkdown(data) {

  let licensebadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${licensebadge} \n  
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
${licenseSection}

## Contribute 
${data.contributing}

## Tests 
${data.tests} 

## Problems
Contact via e-mail: ${data.email} \n
Or visit www.github.com/${data.github}`
}

module.exports = { generateMarkdown }
//generate markdown is the only function that will be called off this page
