let uScore = 0;
let cScore = 0;
let gameRound = 1;
const uScore_span = document.getElementById("uScore");
const cScore_span = document.getElementById("cScore");
const gameRound_span = document.getElementById("gameRound");
const action_p = document.querySelector("#action > p");
const time_div = document.querySelector("#time");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function generateComp(){
  const choices =  ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}



function win(userPlay, compPlay) {
  uScore++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML = userPlay + " beats " + compPlay;
  gameRound++;
}

function lose(userPlay, compPlay) {
  cScore++;
  gameRound++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML = userPlay + " loses to " + compPlay;
}

function tie(userPlay, compPlay) {
  gameRound++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML =" both seleced " + compPlay;
}

function round(userPlay){
  const compPlay = generateComp();
  switch  (userPlay + compPlay) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userPlay, compPlay);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userPlay, compPlay);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userPlay, compPlay);
      break;
  }
}

function game(){

  if (uScore === 5) {
   time_div.innerHTML = "congratulations! You defeated the computer in " + gameRound  +" round. ";
   uScore = 0;
   cScore = 0;
   gameRound = 0;
 }
 if (cScore === 5) {
   time_div.innerHTML = "You lost to the computer in " + gameRound  +" round. ";
 }

}

function newGame(){
  uScore = 0;
  cScore = 0;
  gameRound = 0;
  time_div.innerHTML = "Round: " + gameRound;
}

function userSelection() {
rock_div.addEventListener('click', function(){
  round("rock");
  game();
  if (uScore === 5 || cScore === 5) {
   newGame();
 }
});
paper_div.addEventListener('click', function(){
  round("paper");
  game();
  if (uScore === 5 || cScore === 5) {
   newGame();
 }
});
scissors_div.addEventListener('click', function(){
  round("scissors");
  game();
  if (uScore === 5 || cScore === 5) {
   newGame();
 }
});

}
userSelection();
