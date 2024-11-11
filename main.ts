let sorna = 0
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    sorna = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sorna < 20 && sorna < 2) {
        cuteBot.motors(0, -50)
    } else {
        basic.pause(randint(100, 200))
        cuteBot.motors(20, 20)
    }
})
