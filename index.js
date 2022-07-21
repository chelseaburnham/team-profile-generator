const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

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
            type: "list",
            message: "Please select the option that applies.",
            name: "role",
            choices: ["Employee", "Engineer", "Intern", "Manager"]
        },
        {
            type: "input",
            message: "What is your github link?",
            name: "github"
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
        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        },
    ])
    .then((response) => {
        console.log(response)
        fs.writeFile("index.html", generateHtml(response), (err) =>
        err ? console.error(err) : console.log("Success!")
        )
      }
    )