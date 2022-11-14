const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
const team = []
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const path = require("path")
const generateHTML = require("./src/generateHTML")
//questions
function mainMenu(){
inquirer.prompt({
    type: "list",
    name: "type",
    message: "What type of team member would you like to add?",
    choices: ["manager","engineer","intern","build team"]
    
}).then(answers => {
    if (answers.type==="manager"){
        promptManager()
    } else if (answers.type==="engineer"){
        promptEngineer()
    } else if (answers.type==="intern"){
        promptIntern()
    } else {
        builtTeam()
    }
})
}
function promptManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the employee name",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee email",
        },
        {
            type: "input",
            name: "office",
            message: "Enter the office number",
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.office)
        team.push(manager)
        mainMenu()
    })
}
function promptEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the employee name",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee email",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the github username",
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github)
        team.push(engineer)
        mainMenu()
    })
}
function promptIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the employee name",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter the employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee email",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the school",
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
        team.push(intern)
        mainMenu()
    })
} 
function builtTeam(){
    console.log(team)
    fs.writeFileSync(path.join(__dirname, "/dist/", "index.html"),generateHTML(team))
}
mainMenu()