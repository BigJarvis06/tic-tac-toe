(function Gameboard() {
    
    const board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < columns; i++) {
        board[i] = [];
        for (let j = 0; j < rows; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => {
        return board;
    }

    const placeToken = (player, column, row) => {
        if (board[column[row]] === 0) {
        board[column[row]] = addToken(player);
        }
    }

    return {placeToken, getBoard};
})()

function Cell() {
    let value = 0;
    const addToken = (player) => {
        value = player;
    }
    const getValue = () => {
        return value;
    }

    return {addToken, getValue};
}