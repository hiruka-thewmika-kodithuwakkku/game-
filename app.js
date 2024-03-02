let randomNumber = Math.floor(Math.random() *10) + 1; // Generate random number between 1 and 10
let chances = 3;

function checkGuess() {
    let userInput = parseInt(document.getElementById("userInput").value);
    
    if (isNaN(userInput) || userInput < randomNumber|| userInput > randomNumber) {
        document.getElementById("message").textContent = "Please enter a number between 1 and 10.";
    } else {
        if (userInput === randomNumber) {
            document.getElementById("message").textContent = "Congratulations! You win!";
        } else {
            chances--;
            if (chances === 0) {
                document.getElementById("message").textContent = "Sorry, you lose. The correct number was " ;
            } else {
                document.getElementById("message").textContent = "Incorrect guess. You have " + chances + " chance(s) left.";
            }
        }
    }
}