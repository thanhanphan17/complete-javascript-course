'use strict';

let currScore = 0;
let score1 = 0, score2 = 0;

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const player1Score = document.querySelector("#score--0");
const player2Score = document.querySelector("#score--1");

const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

const init = function () {
    score1 = score2 = currScore = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;
}

init();

// Click roll button
rollButton.addEventListener("click", function () {
    if (score1 < 100 && score2 < 100) {
        let rollResult = Math.floor(Math.random() * 6) + 1;
        let imgResult = "dice-" + rollResult + ".png";
        document.querySelector(".dice").src = imgResult;

        if (player1.classList.contains("player--active")) {
            currScore += rollResult;
            if (rollResult == 1) {
                currScore = 0;
                player1.classList.remove("player--active");
                player2.classList.add("player--active");
                document.querySelector("#current--0").textContent = currScore;
            }

            document.querySelector("#current--0").textContent = currScore;
        } else {
            currScore += rollResult;
            if (rollResult == 1) {
                currScore = 0;
                player1.classList.add("player--active");
                player2.classList.remove("player--active");
                document.querySelector("#current--1").textContent = currScore;
            }
            document.querySelector("#current--1").textContent = currScore;
        }
    } 
    
    if (score1 >= 100) {
        player1.classList.add("player--winner");
    } else if (score2 >= 100) {
        player2.classList.add("player--winner");
    }
});

// Click hold button
holdButton.addEventListener("click", function () {
    if (score1 < 100 && score2 < 100) {
        if (player1.classList.contains("player--active")) {
            player1.classList.remove("player--active");
            player2.classList.add("player--active");
            score1 += currScore;
            player1Score.textContent = score1;
            document.querySelector("#current--0").textContent = 0;
        } else {
            player2.classList.remove("player--active");
            player1.classList.add("player--active");
            score2 += currScore;
            player2Score.textContent = score2;
            document.querySelector("#current--1").textContent = 0;
        }
        currScore = 0;
    }
    
    if (score1 >= 100) {
        player1.classList.add("player--winner");
    } else if (score2 >= 100) {
        player2.classList.add("player--winner");
    }
});

// Click new game button
newGameButton.addEventListener("click", function() {
    if (player1.classList.contains("player--winner")) {
        player1.classList.remove("player--winner");
    }

    if (player2.classList.contains("player--winner")) {
        player2.classList.remove("player--winner");
    }

    if (player2.classList.contains("player--active")) {
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
    }   

    init();
});