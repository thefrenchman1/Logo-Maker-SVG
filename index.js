const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a 3 character text for your logo'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like the logo to be?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color should the logo be?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Lastly, what color should the text be?'
    }
];

inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle(answers.text, answers.textColor);
            break;

        case 'Square':
            shape = new Square(answers.text, answers.textColor);
            break;

        case 'Triangle':
            shape = new Triangle(answers.text, answers.textColor);
            break;

        default:
            console.log('Invalid shape');
            return;
    }

    shape.setColor(answers.color);

    const svg = shape.render();

    fs.writeFile('logo.svg', svg, err => {
        if (err) {
            console.error('Error creating logo:', err);
        } else {
            console.log('Logo created successfully!');
        }
    });
});
