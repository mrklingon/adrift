function gosouth () {
    for (let gs = 0; gs <= 3; gs++) {
        for (let gx = 0; gx <= 4; gx++) {
            led.plotBrightness(gx, gs, led.pointBrightness(gx, gs + 1))
        }
    }
}
function weststars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(0, index, 20 * randint(3, 10))
        } else {
            led.unplot(0, index)
        }
    }
}
function southstars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index, 4, 20 * randint(3, 10))
        } else {
            led.unplot(index, 4)
        }
    }
}
function gowest () {
    for (let gs = 0; gs <= 4; gs++) {
        for (let gx = 0; gx <= 3; gx++) {
            led.plotBrightness(4 - gx, gs, led.pointBrightness(3 - gx, gs))
        }
    }
}
input.onGesture(Gesture.LogoUp, function () {
    dir = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    dir = 3
})
function northstars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(index, 0, 20 * randint(3, 10))
        } else {
            led.unplot(index, 0)
        }
    }
}
input.onGesture(Gesture.TiltRight, function () {
    dir = 1
})
input.onGesture(Gesture.LogoDown, function () {
    dir = 2
})
function gonorth () {
    for (let gs = 0; gs <= 3; gs++) {
        for (let gx = 0; gx <= 4; gx++) {
            led.plotBrightness(gx, 4 - gs, led.pointBrightness(gx, 3 - gs))
        }
    }
}
function eaststars () {
    for (let index = 0; index <= 4; index++) {
        if (6 < randint(0, 10)) {
            led.plotBrightness(4, index, 20 * randint(3, 10))
        } else {
            led.unplot(4, index)
        }
    }
}
function goeast () {
    for (let gs = 0; gs <= 4; gs++) {
        for (let gx = 0; gx <= 3; gx++) {
            led.plotBrightness(gx, gs, led.pointBrightness(1 + gx, gs))
        }
    }
}
let dir = 0
dir = 0
basic.forever(function () {
    basic.pause(100)
    if (dir == 0) {
        northstars()
        gonorth()
    }
    if (dir == 1) {
        eaststars()
        goeast()
    }
    if (dir == 2) {
        southstars()
        gosouth()
    }
    if (dir == 3) {
        weststars()
        gowest()
    }
})
