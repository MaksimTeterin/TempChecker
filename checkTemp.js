function getRandomTemperature(max) {
    return Math.floor(Math.random() * max)
}
let randomTemperature = getRandomTemperature(60)
console.log(randomTemperature)

function between(randomTemperature, min, max) {
    return randomTemperature >= min && randomTemperature <= max;
}

if (between(randomTemperature, 0, 20)) {
    console.log("-1")
}

if (between(randomTemperature, 21, 40)) {
    console.log("0")
}

if (between(randomTemperature, 41, 60)) {
    console.log("1")
}
