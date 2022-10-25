//Packages
const inquirer = require("inquirer");
const fs = require("fs");

//Team
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Generated page
const generateHtml = require("./util/generateHtml");

//Added employee array
const employees = [];

function addManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?",
        },
    ]).then(managerAns =>) {
        console.log(managerName);
        const manager = new Manager (name, id, email, officeNumber);
        employees.push(manager);
        
        {
            type: "list",
            name: "choice",
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "Finished"]
        }
        ]).then(managerAns =>) {
           console.log(managerName);

           const manager = new Manager (name, id, email, officeNumber);
           employees.push(manager);







        switch (responses.choice){
            case "Add Engineer":
                console.log("Add Engineer")
                addEngineer();
                break;
            case "Add Intern":
                console.log("Add Intern")
                addIntern();
                break;
            case "Finished":
                console.log("Finished")

        }
    }
}
    
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "username",
            message: "What is the employee's GitHub username?",
        },
        {
            type: "list",
            name: "choice",
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "Finished"]
        }])

}