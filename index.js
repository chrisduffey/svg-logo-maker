// Required packages for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const {Shape,Circle, Square, Triangle} = require ("./lib/shapes");
const validate = (value) => {if (value){return true}else {return 'Please enter a value.'}};


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
        message: "What color would you like the text to be? (can use color name or hexidecimal)",
        name: "textColor"
    },
    {
        type: "input",
        message: "What color would you like? (can use color name or hexidecimal)",
        name: "color",
        validate: (value)=>validate(value),
    }
];

inquirer.prompt(questions).then((answers) => {
    const {logo, shape, textColor, color} = answers;
    // const newShape = new Shape();
    let svgImg = "";

    // newShape.setColor(color);

    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(color);
            svgImg = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(color);
            svgImg = square.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(color);
            svgImg = triangle.render();
            break;
        
    }

    const presentSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgImg}
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logo}</text>
    </svg>`; 
    
    fs.writeFileSync('dist/logo.svg', presentSvg);

    console.log(' Generated logo.svg !!')

});