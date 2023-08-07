class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        throw new Error("Class must implement render method.")
    }
}
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color}" />
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<circle cx="150" cy="120" r="100" fill="${this.color}" />
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }
    render() {
        return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = {Triangle, Circle, Square};