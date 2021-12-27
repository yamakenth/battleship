// gameboard class
class Gameboard {
  // constructor (10x10 array, {shipType: {ship, position: {x, y}}})
  constructor() {
    this.matrix = Array.from(Array(10), () => new Array(10).fill(''));
    this.ships = {};
  }
  // place ship in matrix and update ships starting grid
  // take in ship, x-coord, y-coord, orientation (x/y)
  // return no results 
  placeShip(ship, x, y, orientation) {
    // update matrix
    const xEnd = (orientation === 'x') ? x + 1 : x + ship.length;
    const yEnd = (orientation === 'y') ?  y + 1 : y + ship.length; 
    for (let row = x; row < xEnd; row++) {
      for (let col = y; col < yEnd; col++) {
        this.matrix[row][col] = ship.type;
      }
    }
    // update obj
    this.ships[ship.type] = {
      shipObj: ship,
      position: { x, y}
    };
  }


  /*
  // determine if a ship is hit, send hit function to the ship
  // take in coordinate
  // return no result 
  receiveAttack(coord) {
    const shipOnCurGrid = this.board[coord[0]][coord[1]];
    if (shipOnCurGrid !== '') {
      this.ships[shipOnCurGrid][0].hit()
    }
    this.board[coord[0]][coord[1]] = 'X';
  }
  */
}

/*
const ships = require('./ship');
const Ship = ships.Ship;
destroyer = new Ship('Destoryer', 3);
const board = new Gameboard();
board.placeShip(destroyer, [2, 3], 'y');
console.log(board.board);
*/

export { Gameboard };