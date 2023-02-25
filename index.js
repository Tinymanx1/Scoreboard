let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let awayCount = 0
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

function add1PointsA() {
    awayCount += 1
    awayScore.textContent = awayCount
}
function add2PointsA() {
    awayCount += 2
    awayScore.textContent = awayCount
}
function add3PointsA() {
    awayCount += 3
    awayScore.textContent = awayCount
}

function reset() {
    homeScore.textContent = 0
    awayScore.textContent = 0
    homeCount = 0
    awayCount = 0
}