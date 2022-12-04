//factory function to create players
let createPlayer = () => {
   for (let i = 0; i < 4; i++) {
    if (GameBoard.playerArray.length >= 6) {
        GameBoard.makePlayerMove();
        break;
    } else if (GameBoard.playerArray.length == 0) {
        let playerName = prompt("What is your first name?");

        if (playerName = "" || playerName == null) {
            alert('Please pick a name');
            continue;
        }

        let playerNumber = 1;
        let assignedXO = "X";
        alert ("You are player 1 and you play with X");
        GameBoard.playerArray.push(playerName, playerNumber, assignedXO);
        console.log("Show me the contents of playerArray :", GameBoard.playerArray);

    }   else if (GameBoard.playerArray.length !== 0) {
            let playerName = prompt('What is your first name?');

            if (playerName == "" || playerName == null) {
                alert('You still need to pick a name');
                continue;
            }

        let playerNumber = 2;
        let assignedXO = "O";
        alert('You are player number 2, and play with O');
        GameBoard.playerArray.push(playerName, playerNumber, assignedXO);
        console.log("Show me the contents of the playerArray :", GameBoard.playerArray);
    }
   }
};

//module
let GameBoard = (function() {
    let GameBoardArray = [];
    let playerArray = []
    // return {GameBoardArray};
    let makePlayerMove = () => {
        if (playerArray.length == 6 && GameBoardArray.length < 9) {
            if (GameBoardArray.length == 0) {
                alert("Player 1, please make your move");
                GameBoardArray.push(playerArray[2]);
                console.log ("Show me the current GameBoardArray :", GameBoardArray);

            } else if (GameBoardArray[GameBoardArray.length - 1] == "X") {
                alert("Player 2, please make your move");
                GameBoardArray.push(playerArray[5]);
                console.log ("Show me the current GameBoardArray :", GameBoardArray);

            } else if (GameBoardArray[GameBoardArray.length - 1] == "O") {
                alert("Player 1, please make your move");
                GameBoardArray.push(playerArray[2]);
                console.log ("Show me the current GameBoardArray :", GameBoardArray);
            }
    }
}
return {GameBoardArray, playerArray, makePlayerMove};

})();
// GameBoard.GameBoardArray;

let game = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

        let index = 0;
        makeMove.forEach(makeMoves => {
            makeMoves.dataset.linkedButton = index;
            makeMoves.addEventListener("click", renderArrayToScreen);

            function renderArrayToScreen() {
                const gridBoxes = document.querySelectorAll(".grid-box");

                let index = 0;
                gridBoxes.forEach(gridBox => {
                    gridBox.dataset.linkedButton = index;

                    if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                        gridBox.textContent = GameBoard.GameBoardArray[GameBoard.GameBoardArray.length - 1];
                        console.log('show me my makeMoves linked button value ...', makeMoves.dataset.linkedButton);
                        console.log('show me my Box linked button value ...', gridBox.dataset.linkedButton);
                    }
                index++;
                })

                function checkWin(player) {
                    const vertical = [0,3,6].map(i=>{return[i,i+1,i+2]});
                    const horizontal = [0,1,2].map(i=>{return[i,i+3,i+6]});
                    const diagonal = [[0,4,8],[2,4,6]];

                    let allwins = [].concat(horizontal).concat(vertical).concat(diagonal);
                    let results = allwins.some(indices => {
                    return gridBoxes[indices[0]].textContent == player && gridBoxes[indices[1]].textContent == player && gridBoxes[indices[2]].textContent == player})
                    return results;
                }

    if (checkWin("X") == true) {
        console. log(GameBoard.playerArray[0], " Wins!");
        const body = document.querySelector("body");
        const playerWinMessage = document.createElement("h1");
        playerWinMessage.textContent = (GameBoard.playerArray[0] + " Wins!");
        body.appendChild (playerWinMessage);
        makeMove.forEach (makeMoves => {
        makeMoves.remove();
    });
    startGameButton. remove();
    return;

    } else if (checkWin("0") == true) {
        console.log(GameBoard.playerArray[3], " Wins!");
        const body = document.querySelector("body");
        const playerwinMessage = document. createElement("h1");
        playerwinMessage.textContent = (GameBoard.playerArray[3] + " Wins!");
        body.appendChild(playerwinMessage);
        makeMove.forEach(makeMoves => {
            makeMoves.remove();
    });
    startGameButton.remove();
        return;
    
    } else if (GameBoard.GameBoardArray.length == 9) {
        console.log("Tie!");
        const body = document.querySelector("body");
        const playerwinMessage = document. createElement("h1");
        playerwinMessage.textContent = ("Tie!");
        body.appendChild(playerwinMessage);
        makeMove.forEach(makeMoves => {
            makeMoves.remove();
    });
    startGameButton.remove();
        return;
    }

    GameBoard.makePlayerMove();
        }
        index++;
        })
    

    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer)

    const clearBoardButton = document.querySelector(".clear-board-button")
    clearBoardButton.addEventListener("click", clearBoard);

    function clearBoard() {
        location.reload();
    }
})();










 // const playerOneSelection = (e) => playerSelection;
    // boxes.forEach(Box => Box.addEventListener('click' => {
    //     const elementX = document.createElement("div")}));
    //     elementX.classList.add("elementX");
    //     elementX.innerHTML = 'X';
    //     elementX.dataset.linkedArray = index;
    //     index++;

    //     Box.appendChild(elementX);

    
    // for (const box of boxes) {
    //     box.addEventListener("click", () => {
    //         boxes[0].textContent = GameBoard.GameBoardArray;
    //         // click and then function that creates element X or O depending on the value assigned to the player and the player playing.
    //         // add to DOM
    //         console.log('Box 1 clicked');
    //     });
    // };



