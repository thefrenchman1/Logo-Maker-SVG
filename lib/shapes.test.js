// Tests for the shapes module
const { Circle, Square, Triangle } = require('./shapes');

// Circle test
describe('Circle', () => {
    test('renders a circle', () => {
        const shape = new Circle();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<svg width="300" height="300"><circle cx="150" cy="150" r="80" fill="${color}" /><text x="50%" y="50%" fill="" alignment-baseline="middle" text-anchor="middle"></text></svg>`);
    });
});

// Square test
describe('Square', () => {
    test('renders a square', () => {
        const shape = new Square();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<svg width="300" height="300"><rect width="300" height="300" fill="${color}" /><text x="50%" y="50%" fill="" alignment-baseline="middle" text-anchor="middle"></text></svg>`);
    });
});

// Triangle test
describe('Triangle', () => {
    test('renders a triangle', () => {
        const shape = new Triangle();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<svg width="300" height="300"><polygon points="150,60 60,240 240,240" fill="${color}" /><text x="50%" y="50%" fill="" alignment-baseline="middle" text-anchor="middle"></text></svg>`);
    });
});
