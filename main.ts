basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 5)
    led.enable(true)
    led.setBrightness(204)
    led.plotBarGraph(
    input.soundLevel(),
    128
    )
    if (input.soundLevel() < 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
    basic.pause(100)
})
