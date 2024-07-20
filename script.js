let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");

const updateuserScore = document.querySelector("#user-score");
const updatecompScore = document.querySelector("#comp-score");
const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msgpara.innerText = "Game was draw, play again";
    msgpara.style.backgroundColor = "#007bff";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        updateuserScore.innerText = userScore;
        msgpara.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msgpara.style.backgroundColor = "green"; 
    }else {
        compScore++;
        updatecompScore.innerText = compScore;
        msgpara.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msgpara.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompchoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
