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
function setRange(minn,maxx) {
    
    // if min and max not empty assign the value to the variable
    if(document.getElementById('min').value == '' && document.getElementById('max').value == '') {
        min = Number(minn)
        max = Number(maxx)
        //startGuess()
    }else{
        min = parseInt(document.getElementById('min').value);
        max = parseInt(document.getElementById('max').value);
    }
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
    document.getElementById('result').style.display = 'inline-block'
    document.getElementById('guess').style.display = 'inline-block' 
    document.getElementById('title-again').style.display = 'block';
    document.getElementById('guess-button').style.display = 'inline-block';
    document.getElementById('result').style.display = 'none'

    //set the random number between the range min and max
    randomNumber = Math.floor(min + Math.random() * (max - min + 1));
}

//check if the number is correct
function isCorrect() {
    guessNumber = document.getElementById('guess').value
    
    if(guessNumber == randomNumber) {
        alert('you win!! congration')
        document.getElementById('title-again').innerHTML = 'start again?';
        document.getElementById('guess').style.display = 'none';
        document.getElementById('guess-button').style.display = 'none';
        document.getElementById(`result`).style.display = 'none';
        document.getElementById('again').style.display = 'inline-block';
        
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
    // reset all style and value
    document.getElementById('guess').value = ''
    document.getElementById('result').style.display = 'none'
    document.getElementById('guess').style.display = 'none'
    document.getElementById('again').style.display = 'none'
    document.getElementById('start-the-game').style.display = 'none'
    document.getElementById('again').style.display = 'none';
    document.getElementById('title-again').style.display = 'none';
    document.getElementById('start').style.display = 'flex'
    start()
}
