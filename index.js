// Required packages for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const {Shape,Circle, Square, Triangle} = require ("./lib/shapes");
const { type } = require('os');
const validate = (value) => {if (value){return true}else {return 'Please enter a value.'}}

const questions= [
    {
        type: "input",
        message: "You can enter up to 3 characters for your logo:",
        name : "logo",
        validate: (input)=>input.length >= 3,

    },
    {
        type: "list",
        message : "What shape would you like?",
        name : "shape",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ],
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "textColor"
    },
    {
        type: "input",
        message: "What color would you like?",
        name: "color",
        validate: (value)=>validate(value),
    }
];

inquirer.prompt(questions).then((answers) => {
    const {logo, shape, textColor, color} = answers;
};