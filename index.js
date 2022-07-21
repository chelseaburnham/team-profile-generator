const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require("./generateHtml")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
)}

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
            name: "employee",
            choices: ["Employee", "Engineer", "Intern", "Manager"]
        },
    ])
    .then((response) => {
        console.log(response)
         writeToFile("index.html", generateHtml(response));
      }
    )