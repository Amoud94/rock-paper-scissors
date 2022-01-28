let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBorde_div = document.querySelector(".score-borde");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoise(){
    const choises = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choises[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    else return "SCISSOR";
}

function win(userChoise,computerChoise){
    const userChoise_div = document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(userChoise)} beats  ${convertToWord(computerChoise)} , You win.`;
    userChoise_div.classList.add("green-glow");
    setTimeout(() => userChoise_div.classList.remove("green-glow"), 600);
}

function lose(userChoise,computerChoise){
    const userChoise_div = document.getElementById(userChoise);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${convertToWord(userChoise)} loses to  ${convertToWord(computerChoise)} , You lose.`;
    userChoise_div.classList.add("red-glow");
    setTimeout(() => userChoise_div.classList.remove("red-glow"), 600);
}

function draw(userChoise,computerChoise){
    const userChoise_div = document.getElementById(userChoise);
    result_p.innerHTML =`${convertToWord(userChoise)} equals  ${convertToWord(computerChoise)} , It's a draw.`;
    userChoise_div.classList.add("gray-glow");
    setTimeout(() => userChoise_div.classList.remove("gray-glow"), 600);
}


function game(userChoice){
    const computerChoise = getComputerChoise();
    switch(userChoice+computerChoise){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoise);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoise);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice,computerChoise);
            break;

    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main();