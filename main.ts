input.onButtonPressed(Button.A, function () {
    sensor = 1
})
input.onButtonPressed(Button.AB, function () {
    sensor = 3
})
input.onButtonPressed(Button.B, function () {
    sensor = 2
})
let sensor = 0
sensor = 0
basic.forever(function () {
    if (sensor == 1) {
        led.plotBarGraph(
        input.acceleration(Dimension.X),
        1200
        )
        music.playTone(input.acceleration(Dimension.X), music.beat(BeatFraction.Eighth))
    } else if (sensor == 2) {
        basic.showString("" + (input.lightLevel()))
        music.playTone(input.lightLevel(), music.beat(BeatFraction.Eighth))
    } else if (sensor == 3) {
        basic.showString("" + (input.temperature()))
        music.playTone(input.temperature(), music.beat(BeatFraction.Eighth))
    } else {
        basic.showString("" + (input.compassHeading()))
        music.playTone(input.compassHeading(), music.beat(BeatFraction.Eighth))
    }
})
