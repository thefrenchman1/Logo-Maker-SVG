class Shape {
    constructor(text, textColor) {
        this.text = text || '';
        this.textColor = textColor || '';
        this.svgWidth = 300;
        this.svgHeight = 300;
    }

    setColor(color) {
        this.color = color;
    }
}

// Defines circle within shape
class Circle extends Shape {
    render() {
        return `<svg width="${this.svgWidth}" height="${this.svgHeight}"><circle cx="${this.svgWidth / 2}" cy="${this.svgHeight / 2}" r="80" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle">${this.text}</text></svg>`;
    }
}

// Defines square within shape
class Square extends Shape {
    render() {
        return `<svg width="${this.svgWidth}" height="${this.svgHeight}"><rect width="${this.svgWidth}" height="${this.svgHeight}" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle">${this.text}</text></svg>`;
    }
}

// Defines triangle within shape
class Triangle extends Shape {
    render() {
        return `<svg width="${this.svgWidth}" height="${this.svgHeight}"><polygon points="${this.svgWidth / 2},${this.svgHeight / 10 * 2} ${this.svgWidth / 10 * 2},${this.svgHeight / 10 * 8} ${this.svgWidth / 10 * 8},${this.svgHeight / 10 * 8}" fill="${this.color}" /><text x="50%" y="50%" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle">${this.text}</text></svg>`;
    }
}

module.exports = { Circle, Square, Triangle };