let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // rock, paper , scissors.
    const options = ["rock","paper","scissor"]
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame =() =>{
    
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

const showWin = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        userS.innerText = userScore;
        msg.innerText = `🎉 Congratulations, You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else
    {
        compScore++;
        compS.innerText = compScore;
 
        msg.innerText = `😌 Sorry, You Lose! ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}
const playGame = (userChoice) =>{

    // Generrate Computer Choise.
    const compChoice = genCompChoice();


    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //scissor, paper
            userWin = compChoice ==="paper"? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock, scissor
            userWin = userChoice === "scissor"? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock"? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
       const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})