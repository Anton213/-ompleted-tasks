class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    calcArea() {
        let div = document.createElement('div');
        div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus expedita id impedit ipsam ipsum labore molestiae quaerat quidem velit!';
        document.body.appendChild(div);
        div.style.cssText = `height: ${this.height}px;
                             width: ${this.width}px;
                             background: ${this.bg};
                             font-Size: ${this.fontSize}px;
                             text-Align: ${this.textAlign}`;
    }
}

const square = new Options(234,234,'blue',20,'center');
console.log(square.calcArea());
