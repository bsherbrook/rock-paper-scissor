let computerSelection=''
let rando;
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
            playBy.innerHTML = `YOU WIN!!! ${playerSelection} beats ${computerSelection}!`;
}   else if (playerSelection === computerSelection){
        playBy.innerHTML = `Call it a draw! Everbody throws ${playerSelection}!`;
}   else {
        compScore += 1;
        cScorecard.innerHTML= `Computer Score: ${compScore}`
        playBy.innerHTML= `YOU LOSE!!! ${computerSelection} beats ${playerSelection}!`;
}
}

function compChoice(){
    let rando = Math.floor(Math.random()*3 +1);
    if (rando === 1) {return 'rock'}; 
    if (rando === 2) {return 'paper'};
    if (rando === 3) {return 'scissors'};
}

function game(){
    for (let i=0; i < 5; i++){
        playerSelection= prompt('Rock Paper Scissors!')
        playRound(playerSelection)}
            if (playerScore>compScore){
                console.log('PLAYER BEATS COMPUTER!!!');
}           else if (playerScore<compScore){
                console.log('COMPUTER DOMINATES!!!');
}           else if (playerScore===compScore){ 
                console.log('What is this? A TIE?!?!?!');
}   
}
