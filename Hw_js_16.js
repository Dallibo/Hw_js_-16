class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ' && this.ink > 0) {
                printedText += text[i];
                this.ink -= 0.5;
            } else {
                printedText += ' ';
            }
        }
        document.write(`<h1 style="color: ${this.color}">${printedText}</h1>`);
    }
}
let marker = new Marker('blue', 50);
marker.print('Hello, Web-31');

class RefilMarker extends Marker{
    fill(inks){
        this.ink += inks
    }
}
let refilMarker = new RefilMarker ('red', 30)
refilMarker.print('Im refil marker')
refilMarker.fill(50)
refilMarker.print('Hellow my class')