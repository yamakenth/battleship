// gameboard class
class Gameboard {
  // 10x10 board 
  constructor() {
    this.board = Array.from(Array(10), () => new Array(10).fill(''));
  }
  // place ship on grid and update shipLocation object 
  // take in ship, coordinate, orientation (x/y)
  // return no results
  placeShip(ship, coordinate, orientation) { 
    const rowStart = coordinate[0];
    const colStart = coordinate[1];
    const rowEnd = (orientation === 'x') ? rowStart + 1 : rowStart + ship.length;
    const colEnd = (orientation === 'y') ?  colStart + 1 : colStart + ship.length; 
    for (let row = rowStart; row < rowEnd; row++) {
      for (let col = colStart; col < colEnd; col++) {
        this.board[row][col] = ship.type;
      }
    }
  }
  // determine if a ship is hit, send hit function to the ship
  // take in coordinate
  // return no result 
  receiveAttack(coord) {
    if (this.board[coord[0]][coord[1]] === 'O') {

    }
    this.board[coord[0]][coord[1]] = 'X';
  }
}

/*
const ships = require('./ship');
const Ship = ships.Ship;
destroyer = new Ship('Destoryer', 3);
const board = new Gameboard();
board.placeShip(destroyer, [2, 3], 'y');
console.log(board.board);
*/

module.exports = { Gameboard: Gameboard };