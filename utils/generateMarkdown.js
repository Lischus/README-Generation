function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ""
  }
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  } else {
    return ""
  }
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    The License we are using is ${license}.
    `
  } else {
    return ""
  }
}

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

${data.test}

## Questions

If you have any questions please email me at ${data.email}, or follow me on my Github account ${data.github} to learn more!

`;
}

module.exports = generateMarkdown;
