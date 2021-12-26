// gameboard class
class Gameboard {
  // 10x10 board 
  constructor() {
    this.board = Array.from(Array(10), () => new Array(10).fill(''));
  }
  // place ship on grid (update only)
  // take in ship, coordinate, orientation (x/y)
  // return no results
  placeShip(ship, coordinate, orientation) {
    const rowStart = coordinate[0];
    const colStart = coordinate[1];
    const rowEnd = (orientation === 'x') ? rowStart + 1 : rowStart + ship.length;
    const colEnd = (orientation === 'y') ?  colStart + 1 : colStart + ship.length; 
    console.log(rowStart, rowEnd, colStart, colEnd);
    for (let row = rowStart; row < rowEnd; row++) {
      for (let col = colStart; col < colEnd; col++) {
        this.board[row][col] = 'O';
      }
    }
  }
}

/*
const ships = require('./ship');
const Ship = ships.Ship;
const patrolBoat = new Ship('Patrol Boat', 2);
const board = new Gameboard();
board.placeShip(patrolBoat, [4, 9], 'y');
console.log(board.board);
*/

module.exports = { Gameboard: Gameboard };