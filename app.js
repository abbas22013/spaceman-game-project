// Define Variables: Words that the player can guess
const words = ['planet', 'stars', 'space', 'galaxy', 'rocket', 'comet']

//hints for each word to help player to guess
const hints = {
    planet: "It's a celestial body that orbits a star.",
    stars: "They are massive balls of gas that shine in the sky.",
    space: "It's the vast, seemingly infinite area between stars and planets.",
    galaxy: "A system of stars, planets, and other celestial bodies, like the Milky Way.",
    rocket: "A vehicle designed to travel in space.",
    comet: "A small icy body that has a glowing tail when it orbits the sun."
};


//can choose variables randomly
let word = words[Math.floor(Math.random() * words.length)]; 
//number attempts for player
let attempts = 6
//Variable to determine if the guess is correct
let guessedCorrectly = false


//function for update display word
function displayWord() {
    let displayedWord = "";
    for (let i = 0; i < word.length; i++) {
        displayedWord += "_ ";
    }
    document.querySelector("#word").textContent = displayedWord.trim();
}


//function to update remaining attemots for palyer
function updateAttempts() {
    document.querySelector("#attempts").textContent = `Attempts left: ${attempts}`;
}


//fuction dispaly hint for each word
function displayHint() {
    document.querySelector("#hint").textContent = `Hint: ${hints[word]}`;
}



//function for check the word correct or not 
function checkGuess() {
    const guess = document.querySelector("#guess").value.trim().toLowerCase();
    
    if (guess === word) {
        guessedCorrectly = true;
        document.querySelector("#word").textContent = word; 
        document.querySelector("#message").textContent = "Congratulations! You win!";
        endGame();
    } else {
        attempts--;
        updateAttempts();
        document.querySelector("#message").textContent = "You're wrong!";
        if (attempts === 0) {
            document.querySelector("#message").textContent = "You lost!";
            endGame();
        }
    }

    document.querySelector("#guess").value = "";
}



function endGame() {
    document.querySelector("#guess-btn").disabled = true;
    document.querySelector("#restart-btn").style.display = "block";
}


//event restart game when click restart button
document.querySelector("#restart-btn").addEventListener("click", function() {
    word = words[Math.floor(Math.random() * words.length)];
    attempts = 6;
    guessedCorrectly = false;
    displayWord();
    updateAttempts();
    document.querySelector("#message").textContent = "";
    document.querySelector("#guess-btn").disabled = false;
    document.querySelector("#restart-btn").style.display = "none";
    displayHint();
});



//event guess button
document.querySelector("#guess-btn").addEventListener("click", function() {
    checkGuess();
});



displayWord();
updateAttempts();
displayHint();






