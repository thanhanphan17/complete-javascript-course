'use strict';

let answer = Math.floor(Math.random() * 20) + 1;
let scrore = 20, highScore = 0;
console.log(answer);

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", 
    function() {
        let user_ans = document.querySelector(".guess")
        if (scrore == 0) {
            document.querySelector(".message").textContent = "You lose!";
            return;
        }

        if (user_ans.value != answer) {
            scrore--;
            displayMessage(user_ans.value < answer ? "📉 To low" : "📈 To high");
            document.querySelector(".score").textContent = scrore;
        } else {
            if (scrore > highScore) {
                document.querySelector(".highscore").textContent = scrore;
            }

            displayMessage("🎉 Correct Number!");
            document.querySelector(".number").textContent = answer;
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".number").style.width = "22rem";
        }
    }
);

document.querySelector(".again").addEventListener("click", 
    function() {
        scrore = 20;
        answer = Math.floor(Math.random() * 20) + 1;
        console.log(answer);
        
        displayMessage("Start guessing...");
        document.querySelector(".score").textContent = scrore;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "1";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
    }
);