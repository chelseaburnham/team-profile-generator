const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./src/generateHtml")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
var teamProfile = []

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter your id",
                name: "id"
            },
            {
                type: "input",
                message: "Enter your email",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your office number",
                name: "office"
            }
        ])
        .then((managerAnswers) => {
            const newManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
            teamProfile.push(newManager);
            addTeamMember();
        })
}

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Enter your role",
                name: "role",
                choices: ["Engineer", "Intern", "None"]
            }
        ])
        .then((initialRole) => {
            if (initialRole.role === "Engineer") {
                engineerQuestions(initialRole.name, initialRole.id, initialRole.email, initialRole.role);
            } else if (initialRole.role === "Intern") {
                internQuestions(initialRole.name, initialRole.id, initialRole.email, initialRole.role);
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
                message: "Enter your name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter your id",
                name: "id"
            },
            {
                type: "input",
                message: "Enter your email",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your github link",
                name: "github"
            },
        ])
        .then((engineerAnswers) => {
            const newEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
            teamProfile.push(newEngineer);
            addTeamMember();
        })
}

function internQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter your id",
                name: "id"
            },
            {
                type: "input",
                message: "Enter your email",
                name: "email"
            },
            {
                type: "input",
                message: "Enter the name of your school",
                name: "school"
            },
        ])
        .then((internAnswers) => {
            const newIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            teamProfile.push(newIntern);
            addTeamMember();
        })
}

managerQuestions()