const teams = [
    {
        name: 'Home',
        points: 0,
    },
    {
        name: 'Away',
        points: 0,
    }
]

let home = 0
let away = 0

function scoreHome1() {
    console.log('clicked home +1')
    let home = teams[0]
    home.points++
    updateScore()
}


function scoreAway1() {
    console.log('clicked away +1')
    let home = teams[1]
    home.points++
    updateScore()
}

function scoreHome3() {
    console.log('clicked home +3')
    let home = teams[0]
    home.points += 3
    updateScore()
}

function scoreAway3() {
    console.log('clicked home +3')
    let home = teams[1]
    home.points += 3
    updateScore()
}

function updateScore() {
    let home = 0
    let away = 0
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i]
        if (team.name == 'Home') {
            home += team.points
            document.getElementById('home-score').innerText = home
        }
        else if (team.name = 'Away') {
            away += team.points
            document.getElementById('away-score').innerText = away
        }
    }
}

function reset() {
    console.log('clicked reset')
    let home = 0
    let away = 0
    document.getElementById('home-score').innerText = home
    document.getElementById('away-score').innerText = away
}

