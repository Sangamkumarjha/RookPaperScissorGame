let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const messages = document.querySelector("#msg");
const userScoree = document.querySelector("#user_score");
const compScore = document.querySelector("#comp_score");


const compChoices = (userchoose) => {
  const options = ["rock", "paper", "scissors"];
  const indx = Math.floor(Math.random() * 3);
  const option = options[indx];
  console.log(option);
  const showWinner = (userWin) => {
    if (userWin === true) {
        userScore++;
        userScoree.innerText=userScore;
    console.log(userScore);
      console.log("you win");
      messages.innerText="You win!";
      messages.style.backgroundColor="green";
    } else {
        computerScore++;
        compScore.innerText=computerScore;
      console.log("you loss");
      messages.innerText="You loss!";
      messages.style.backgroundColor="red";
    }
  };

  if (option === userchoose) {
    console.log("draw");
    messages.innerText="Draw";
    messages.style.backgroundColor="yellow";
  } else {
    let userWin = true;
    if (userchoose === "rock") {
      userWin = option === "paper" ? false : true;
    } else if (userchoose === "paper") {
      userWin = option === "scissors" ? false : true;
    } else {
      userWin = option === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

const playGame = (userchoose) => {
  compChoices(userchoose);

  console.log(userchoose);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoose = choice.getAttribute("id");
    playGame(userchoose);
  });
});
