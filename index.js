let score = 0;
var scoreDisplay = document.getElementById('score');

let holes = document.getElementsByClassName("hole")

let randomHoleIndex = Math.floor(Math.random() * holes.length)
setInterval(() => {holes[randomHoleIndex].classList.toggle("mole")}, 1500)

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', event => {
    if (event.target.matches('.mole')) {
        ++score
        holes[randomHoleIndex].classList.remove("mole")
        randomHoleIndex = Math.floor(Math.random() * holes.length)
    }
    scoreDisplay.innerHTML = score
})
