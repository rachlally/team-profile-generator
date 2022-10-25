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
    ]).then((response) => {
        const {name, id, email, officeNumber} = response;
        const manager = new Manager (name, id, email, officeNumber);
        employees.push(manager);
        console.log(manager);
        addEmployee();
    })
};

function addEmployee (){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "Finished"]
        },
    ]).then((response)=> {
        switch (response.choice){
            case "Add Engineer":
                addEngineer();
                break;
            case "Add Intern":
                addIntern();
                break;
            case "Finished":
                writeFile();
                break;
            default:
                console.log(employees)
                break;

        }
    })
};
    
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
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
    ]).then((response) => {
        const {name, id, email, username} = response;
        const engineer = new Engineer (name, id, email, username);
        employees.push(engineer);
        console.log(engineer);
        addEmployee();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
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
            name: "school",
            message: "What school does the intern attend?",
        },
    ]).then((response) => {
        const {name, id, email, school} = response;
        const intern = new Intern (name, id, email, school);
        employees.push(intern);
        console.log(intern);
        addEmployee();
    })
};

function writeFile() {
    fs.writeFile("index.html", generateHtml(employees), (err) =>
        err ? console.log(err) : console.log("Generating Team Profile"))
}

//intitalize app
// function init(){
//     addManager();
    
//     }
// init();
addManager();