let computerSelection=''
let rando;
let buttBox= document.getElementById('buttbox')
let playBy= document.getElementById('playByPlay');
let butts = document.querySelectorAll('.butt');
let pScorecard= document.getElementById('pScore');
let cScorecard= document.getElementById('cScore');
let playerScore=0;
let compScore=0;
butts.forEach(butt => butt.addEventListener('click', playGame));

function playGame(butt){ 
    let playerSelection= butt.target.id;
    let computerSelection = compChoice();
    if (playerSelection==='rock' && computerSelection==='scissors' ||
        playerSelection==='paper' && computerSelection==='rock' ||
        playerSelection==='scissors' && computerSelection=== 'paper'){
            playerScore += 1;
            pScorecard.innerHTML= `Player Score: ${playerScore}`
            if (playerScore === 5){
                playBy.innerHTML= `Sweet Victory`;
                butts.forEach(butt=>butt.disabled=true);
            }
            else {playBy.innerHTML = `YOU WIN!!! ${playerSelection} beats ${computerSelection}!`;}
}   else if (playerSelection === computerSelection){
        playBy.innerHTML = `Call it a draw! Everbody throws ${playerSelection}!`;
}   else {
        compScore += 1;
        cScorecard.innerHTML= `Computer Score: ${compScore}`
        if (compScore=== 5){
            playBy.innerHTML= `Crushing Defeat`;
            butts.forEach(butt=>butt.disabled=true);
        }
        else{ 
        playBy.innerHTML= `YOU LOSE!!! ${computerSelection} beats ${playerSelection}!`;}
}
}

function compChoice(){
    let rando = Math.floor(Math.random()*3 +1);
    if (rando === 1) {return 'rock'}; 
    if (rando === 2) {return 'paper'};
    if (rando === 3) {return 'scissors'};
}