let uScore = 0;
let cScore = 0;
const uScore_span = document.getElementById("uScore");
const cScore_span = document.getElementById("cScore");
const action_p = document.querySelector("#action > p");
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
  action_p.innerHTML = userPlay + " beats " + compPlay;
}

function lose(userPlay, compPlay) {
  cScore++;
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  action_p.innerHTML = userPlay + " loses to " + compPlay;
}

function tie(userPlay, compPlay) {
  uScore_span.innerHTML = uScore;
  cScore_span.innerHTML = cScore;
  action_p.innerHTML =" both seleced " + compPlay;
}

function game(userPlay){
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


function main() {
rock_div.addEventListener('click', function(){
  game("rock");
});
paper_div.addEventListener('click', function(){
  game("paper");
});
scissors_div.addEventListener('click', function(){
  game("scissors");
});

}
main();
console.log(generateComp());
