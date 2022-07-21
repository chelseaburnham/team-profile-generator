const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
var teamProfile = []

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "office"
        }
    ])
    .then((managerAnswers) => {
        const newManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
        teamProfile.push(newManager);
        addTeamMember();
    })
function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select the option that applies.",
                name: "role",
                choices: ["Engineer", "Intern", "None"]
            }
        ])
        .then((initialRole) => {
            if (initialRole.role === "Engineer") {
                engineerQuestions(initialRole.name, initialRole.id, initialRole.email);
            } else if (initialRole.role === "Intern") {
                internQuestions(initialRole.name, initialRole.id, initialRole.email);
            } else {
                fs.writeFile("index.html", generateHtml(teamProfile), (err) =>
                    err ? console.error(err) : console.log("Success!")
                )
            }
        })
}
function engineerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github link?",
                name: "github"
            },
        ])
        .then((engAnswers) => {
            const newEngineer = new Engineer(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
            teamProfile.push(newEngineer);
            addTeamMember();
        })
}

function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the name of your school?",
                name: "school"
            },
        ])
        .then((intAnswers) => {
            const newEngineer = new Engineer(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
            teamProfile.push(newEngineer);
            addTeamMember();
        })
}



