let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let guestCount = 0
let homeCount = 0

function add1PointsH() {
    homeCount += 1
    homeScore.textContent = homeCount
}
function add2PointsH() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function add3PointsH() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function add1PointsG() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function add2PointsG() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function add3PointsG() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}