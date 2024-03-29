input.onButtonPressed(Button.A, function () {
    sensor = 1
})
input.onButtonPressed(Button.AB, function () {
    sensor = 3
})
input.onButtonPressed(Button.B, function () {
    sensor = 2
})
let degrees = 0
let sensor = 0
sensor = 0
basic.forever(function () {
    if (sensor == 1) {
        led.plotBarGraph(
        input.acceleration(Dimension.X),
        1200
        )
        music.playTone(input.acceleration(Dimension.X), music.beat(BeatFraction.Eighth))
        serial.writeValue("x", input.acceleration(Dimension.X))
        serial.writeValue("y", input.acceleration(Dimension.Y))
        serial.writeValue("z", input.acceleration(Dimension.Z))
    } else if (sensor == 2) {
        led.plotBarGraph(
        input.lightLevel(),
        200
        )
        music.playTone(input.lightLevel(), music.beat(BeatFraction.Eighth))
        serial.writeLine("" + (input.lightLevel()))
    } else if (sensor == 3) {
        degrees = input.compassHeading()
        if (degrees < 3 || degrees > 357) {
            basic.showString("N")
        } else if (degrees < 93 && degrees > 87) {
            basic.showString("E")
        } else if (degrees < 183 && degrees > 177) {
            basic.showString("S")
        } else if (degrees < 273 && degrees > 267) {
            basic.showString("W")
        } else {
            basic.showString("" + (degrees))
        }
        music.playTone(input.compassHeading(), music.beat(BeatFraction.Eighth))
        serial.writeLine("" + (input.compassHeading()))
    } else {
        basic.showString("" + (input.temperature()))
        music.playTone(input.temperature(), music.beat(BeatFraction.Eighth))
        serial.writeLine("" + (input.temperature()))
    }
})
