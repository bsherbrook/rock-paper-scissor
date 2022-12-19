let computerSelection=''
let rando;
let playBy= document.getElementById('playByPlay').innerHTML;


let butts = document.querySelectorAll('.butt');
butts.forEach(butt => butt.addEventListener('click', playGame));
function playGame(butt){ 
    let playerSelection= butt.target.id;
    console.log(playerSelection);
    let computerSelection = compChoice();
    console.log(computerSelection);
    if (playerSelection==='rock' && computerSelection==='scissors' ||
        playerSelection==='paper' && computerSelection==='rock' ||
        playerSelection==='scissors' && computerSelection=== 'paper'){
            playerScore += 1
            console.log(`YOU WIN!!! ${playerSelection} beats ${computerSelection}!`);
}   else if (playerSelection === computerSelection){
        console.log(`Call it a draw! Everbody throws ${playerSelection}!`);
}   else {
        compScore += 1;
        console.log(`YOU LOSE!!! ${computerSelection} beats ${playerSelection}!`);
}       console.log(`Player Score:${playerScore}`);
        console.log(`Computer Score:${compScore}`);
}
    //change innerhtml to say you threw rock. cue picture.

function compChoice(){
    let rando = Math.floor(Math.random()*3 +1);
    if (rando === 1) {return 'rock'}; 
    if (rando === 2) {return 'paper'};
    if (rando === 3) {return 'scissors'};
}


let playerScore=0;
let compScore=0;

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
