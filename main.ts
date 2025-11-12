basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # # #
                . . . # .
                . . . . #
                `)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . .
                # # # . .
                . # . . .
                # . . . .
                `)
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
