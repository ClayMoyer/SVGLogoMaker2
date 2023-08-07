const {Triangle, Circle, Square} = require("./libraryshapes");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");

function createSVG({text, textColor, color, shape}) {
    switch(shape) {
        case "Triangle":
            generatedShape = new Triangle(color, text, textColor);
            break;
        case "Circle":
            generatedShape = new Circle(color, text, textColor);
            break;
        case "Square":
            generatedShape = new Square(color, text, textColor);
            break;
    }
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${generatedShape.render()}
    </svg>`
}
inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt);
inquirer.prompt ([
    {
        type: "maxlength-input",
        message: "What text, up to 3 charachters, would you like displayed on your logo?",
        name: "text",
        maxLength: 3
    },
    {
        type: "input",
        mesage: "What color, using a keyword or hexadecimal number, would you like the text to be?",
        name: "textColor"
    },
    {
        type: "input",
        message: "What color would you like the logo to be?",
        name: "color"
    },
    {
        type: "list",
        message: "What shape would you like the logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape"
    }
])
.then((answer) => {
    fs.writeFile('output.svg', createSVG(answer), (err) => {
        if(err) console.log(err);
        console.log("Scalable Vector Graphics formatted image has been created")
    })
});