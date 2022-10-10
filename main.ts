input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . # . .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # . .
        # # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # # # # .
        # # # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # #
        # # # # #
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # # #
        # . # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # # #
        . # . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    basic.pause(500)
    basic.setLedColor(0xff8000)
    basic.pause(500)
    basic.setLedColor(0xffff00)
    basic.pause(500)
    basic.setLedColor(0xff9da5)
    basic.pause(500)
    basic.setLedColor(0x00ff00)
    basic.pause(500)
    basic.setLedColor(0x00ffff)
    basic.pause(500)
    basic.setLedColor(0x0000ff)
    basic.pause(500)
    basic.setLedColor(0xff0080)
    basic.pause(500)
    basic.turnRgbLedOff()
})
