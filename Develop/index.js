// TODO: Include packages needed for this application
// Install inquirer
// place inquirer in a variable
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},
    },
    {
        type: "input",
        name: "installation",
        message: "How will you install your application?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "description",
        message: "Please provide your application's description.",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Instructions",
        message: "Please provide instructions.",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use your application?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Credits",
        message: "Are there any credits to be provided?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use your application?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "list",
        name: "License",
        message: "What license did you use?",
        choices: ['The MIT license', 'The GPL license', 'Apache license', 'N/A'],
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
];

// Title, description, table of contents, installation, usage, license, contributing, tests, and questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
