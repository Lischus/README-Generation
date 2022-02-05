const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description",
    },
    {
        type: "list",
        message: "Please select a license.",
        choices: ["Apache 2.0", "Boost 1.0", "MIT", "IBM", "None"],
        name: "license",
    },
    {
        type: "input",
        message: "How would one install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "How would one test your project?",
        name: "test",
    },
    {
        type: "input",
        message: "How should someone use this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Please provide a link to your Github account.",
        name: "github",
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
    },
];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function init() { 
    inquirer.prompt(questions)
    .then((answer) => {
        writeToFile("README.md", generateMarkdown({...answer}))
    }) 
}

init();
