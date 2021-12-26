// gameboard class
class Gameboard {
  // 10x10 board 
  constructor() {
    this.board = Array(10).fill(Array(10).fill(''));
  }
  // place ship on grid (update only)
  // take in ship, coordinate, orientation 
  // return no results
  placeShip(ship, coordinate, orientation) {

  }
}

const b = new Gameboard();
console.log(b.board);

module.exports = { Gameboard: Gameboard };