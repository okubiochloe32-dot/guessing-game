const playerInput = document.querySelector("#playerInput");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");


const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Generated Random Number: ${randomNumber}`);

submitBtn.addEventListener("click", () => 
{
    const userGuess = Number(playerInput.value);

    console.log(`Player Entered: ${userGuess}`)

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        result.textContent = "Play this game and enter a valid number between 1 and 100.";
        console.log( `Invalid input: ${userGuess}`)
        return;
    } 
    
    if (userGuess === randomNumber) {
        result.textContent = "Congratulations 🎊🎉🎗️🥳!! You WON ₦2,000,000!!";
        result.style.color = "white";
        console.log( `Correct! Player won ₦2,000,000 with guess ${userGuess}`)
    } else {
        result.textContent = `You lost this round 😟😞, the number was ${randomNumber}. Try again to have a chance to win!`;
        console.log( `Wrong guess ${userGuess}. Try again.`)
    }
});

