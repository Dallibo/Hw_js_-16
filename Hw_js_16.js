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


class ExtendedDate extends Date {
    constructor(year, month, day) {
      super(year, month, day);
    }
  
    formatDate() {
      const day = this.getDate();
      const month = this.getMonth();
      const monthNames = [
        "січня", "лютого", "березня", "квітня", "травня", "червня",
        "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
      ];
      const monthName = monthNames[month];
      return `${day} ${monthName}`;
    }
  
    currentDate() {
      const currentDate = new Date();
      return this >= currentDate;
    }
    
    isLeap(){
        const year1 = this.getFullYear()
        return (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0;
    }

    nextDate() {
        const nextDate = customDate;
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
      }
  }
  
  const customDate = new ExtendedDate(2023, 6, 31);
  console.log(customDate.formatDate());
  console.log(customDate.currentDate());
  console.log(customDate.isLeap());
  console.log(customDate.nextDate());





