let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscpara = document.querySelector("#user-score");
const compscpara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw"
    msg.style.backgroundColor = "purple";
};

const showWinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscpara.innerText = userscore;
        msg.innerText = "You Win !"
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscpara.innerText = compscore;
        msg.innerText = "You Lost."
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    console.log("userchoice", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playGame(userchoice);
    });
});