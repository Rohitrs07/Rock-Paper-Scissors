let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice -> modular
    const compChoice = genCompChoice();
    // console.log("Computer choice = ", compChoice);

    if( userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === "rock" ){
            // compChoice can be scissors/paper
            userWin = compChoice === "paper" ? false : true;
        }else if( userChoice === "paper" ){
            // compChoice can be scissors/rock
            userWin = compChoice === "scissors" ? false : true;
        }else{ // userChoice === "scissors"
            // compChoice can be rock/paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach( (choice) => {
    //console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked ", userChoice);
        playGame(userChoice)
    })
})