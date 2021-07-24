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
        name: "Description",
        message: "Please provide your application's description.",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
        {
        type: 'checkbox',
        name: 'built with',
        message: 'Please select the technologies that your application was built with.',
        choices: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Node.js', 'Express.js'],
        default: 0,
        // when: ({ contents }) => { if (contents.indexOf('Built With') > -1) {return true;} else {return false;}},
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
        name: "tests",
        message: "Enter tests:",
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
        name: "github",
        message: "What is your Github username?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?",
        validate: (value)=>{ if(value){return true} else{return 'I need a valid input to continue'}},

    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const userUrl = `https://api.github.com/users/${data.github}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

    })

// Title, description, table of contents, installation, usage, license, contributing, tests, and questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
