//gameboard object for structure of board and related functions.
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    return {
        gameboard
    }
})();

//game object for flow of game.
const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        const name1 = document.querySelector("#name1").value;
        const name2 = document.querySelector("#name2").value;

        if (!name1 || !name2) {
            displayError("Please enter both player names.");
            return;
        }

        players = [
            createPlayer(name1, "X"),
            createPlayer(name2, "O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.gameboard = ["", "", "", "", "", "", "", "", ""];
        document.querySelector(".alert-box").style.display = "none";
        render();
    };

    const playRound = (index) => {
        if (gameOver || Gameboard.gameboard[index]) return;
        
        Gameboard.gameboard[index] = players[currentPlayerIndex].sign;
        render();

        if (checkWinner()) {
            gameOver = true;
            displayWinner(players[currentPlayerIndex].name);
        } else if (isDraw()) {
            gameOver = true;
            displayDraw();
        } else {
            currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        }
    };

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], // First row
            [3, 4, 5], // Second row
            [6, 7, 8], // Third row
            [0, 3, 6], // First column
            [1, 4, 7], // Second column
            [2, 5, 8], // Third column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6]  // Diagonal from top-right to bottom-left
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (Gameboard.gameboard[a] &&
                Gameboard.gameboard[a] === Gameboard.gameboard[b] &&
                Gameboard.gameboard[a] === Gameboard.gameboard[c]) {
                return true;
            }
        }
        return false;
    };

    const isDraw = () => {
        for (let tile of Gameboard.gameboard) {
            if (!tile) {
                return false;
            }
        }
        return true;
    };

    const displayWinner = (winner) => {
        const alertBox = document.querySelector(".alert-box");
        alertBox.textContent = `${winner} won!`;
        alertBox.style.display = "block";
        alertBox.classList.remove("red");
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    };

    const displayDraw = () => {
        const alertBox = document.querySelector(".alert-box");
        alertBox.textContent = "It's a Draw!";
        alertBox.style.display = "block";
        alertBox.classList.add("red");
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    };

    const displayError = (message) => {
        const alertBox = document.querySelector(".alert-box");
        alertBox.textContent = message;
        alertBox.style.display = "block";
        alertBox.classList.add("red");
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    };

    const render = () => {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile, index) => {
            tile.textContent = Gameboard.gameboard[index];
        });
    };

    return {
        start,
        playRound
    }
})();

const createPlayer = (name, sign) => {
    return {
        name, sign
    }
};

//starting the game
const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", () => {
    Game.start();
});

// Adding event listeners to each tile
const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        Game.playRound(index);
    });
});
