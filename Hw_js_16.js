class Animal {
    constructor(name) {
        this.name = name
        this.speed = 0
    }
    run(speed) {
        this.speed += speed
        console.log(`${this.name} runs with speed ${this.speed} km/h`)
    }
    stop() {
        this.speed = 0
        console.log(`${this.name} stops!`)
    }
}
class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`)
    }
    stop() {
        // this.speed = 0
        // console.log(`${this.name} stops!`)
        super.stop()
        this.hide()
    }
}
let rabbit = new Rabbit("White rabbit")
rabbit.run(20)
rabbit.run(10)
rabbit.stop()
rabbit.hide()