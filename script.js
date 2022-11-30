//module
const GameBoard = (() => {
    const GameBoardArray = ['X'];
    return {GameBoardArray};
})();
GameBoard.GameBoardArray;

const game = (() => {
    const box = document.querySelectorAll('.Box');
    box[0].textContent = GameBoard.GameBoardArray;
})();

//factory function
const createPlayer = (playerName, playerNumber, XorO) => {
    const getPlayerName = () => playerName;
    
    console.log("This is the name of Player" + ' ' + playerNumber + ':' + ' ' + playerName);
    
    return {getPlayerName, playerName, playerNumber, XorO}
};

let player1 = createPlayer("Netanjoehoe", 1, "X");
let player2 = createPlayer("Andjella Miracle", 2, "O")


