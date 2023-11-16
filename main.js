let min,max;
let randomNumber;
let guessNumber;


// start function
function start(action) {
    if(action == 'start') {
        document.getElementById('start').style.display = 'none'
        startGame()
    } else if(action == 'range') {
        setRange()
    }
}

// start game function
function startGame() {
    document.getElementById('range').style.display = 'block'
}
//set range function
function setRange() {
    min= document.getElementById('min').value
    max= document.getElementById('max').value
    if(check()) return;
    startGuess()
}
function check(){
    //check if the number is not empty
    if(min == '' || max == '') {
        alert("you have to enter number")
        return true
    }
    //can't set max smaler the min
    if(min >= max) {
        alert("error can't set max smaller or smaler the min")
        return true
    }
}
//start guess function
function startGuess() {
    document.getElementById('range').style.display = 'none'
    document.getElementById('start-the-game').style.display = 'block'
    //set the random number between the range min and max
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber)
}

//check if the number is correct
function isCorrect() {
    guessNumber = document.getElementById('guess').value
    if(guessNumber == randomNumber) {
        alert('you win!! congration')
        document.getElementById('result').style.display = 'none'
        document.getElementById('guess').style.display = 'none'
        document.getElementById('again').style.display = 'block'
        
    } else if(guessNumber < randomNumber) {
        document.getElementById('result').style.display = 'block'
        document.getElementById('result').innerHTML = `you have to guess higher then ${guessNumber}`
    } else if(guessNumber > randomNumber) {
        document.getElementById('result').style.display = 'block'
        document.getElementById('result').innerHTML = `you have to guess lower then ${guessNumber}`
    }
}
//reset function
function reset() {
    min= ''
    max= ''
    randomNumber = ''
    guessNumber = ''

    document.getElementById('guess').value = ''
    document.getElementById('result').style.display = 'none'
    document.getElementById('guess').style.display = 'block'
    document.getElementById('again').style.display = 'none'
    startGuess()
}
