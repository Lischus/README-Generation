// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    The License we are using is ${license}.
    `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## Tests

## Questions

If you have any questions please email me at ${data.email}, or follow me on my Github account ${data.github}!

`;
}

module.exports = generateMarkdown;
