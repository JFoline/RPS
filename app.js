let uScore = 0;
let cScore = 0;
let gameRound = 1;
let winner = false;
const uScore_span = document.getElementById("uScore");
const cScore_span = document.getElementById("cScore");
const gameRound_span = document.getElementById("gameRound");
const action_p = document.querySelector("#action > p");
const roundTime_span = document.getElementById("roundTime");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function generateComp(){
  const choices =  ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function verbSelection(choice){
  if(choice === "rock"){
    return "rock breaks";
  }else if (choice === "paper") {
    return "paper covers";
  } else{
    return "scissors cuts";
  }

}

function win(userPlay, compPlay) {
  uScore++;
  gameRound++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML =`Your  ${verbSelection(userPlay)} their ${compPlay}`;

}

function lose(userPlay, compPlay) {
  cScore++;
  gameRound++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML = `Their ${verbSelection(compPlay)} your ${userPlay}`;
}

function tie(userPlay, compPlay) {
  gameRound++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  gameRound_span.innerHTML = gameRound;
  action_p.innerHTML =`Draw, you both seleced ${compPlay}`;
}

function round(userPlay){
  if (winner === true){
    newGame();
  }
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
   roundTime_span.innerHTML = "Congratulations! You won in round ";
   winner = true;
 }
 if (cScore === 5) {
   roundTime_span.innerHTML = "You lost to the computer in round ";
   winner = true;
 }
}

function newGame(){
  uScore = 0;
  cScore = 0;
  gameRound = 0;
  winner = false;
  roundTime_span.innerHTML = "Round:";
}

function userSelection() {
rock_div.addEventListener('click', function(){
  round("rock");
  game();
});
paper_div.addEventListener('click', function(){
  round("paper");
  game();
});
scissors_div.addEventListener('click', function(){
  round("scissors");
  game();
});

}
userSelection();
