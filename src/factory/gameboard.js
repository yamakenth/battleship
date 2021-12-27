import _ from 'lodash';

class Gameboard {
  // constructor
  constructor() {
    this.matrix = Array.from(Array(10), () => new Array(10).fill(''));
    this.occupiedGrids = [];
  }
  // place ship in matrix and update ships starting grid
  // take in ship, x-coord, y-coord, orientation (x/y)
  // return -1 if error 
  placeShip(ship, x, y, orientation) {
    // list of grids ship will occupy 
    const gridToOccupy = [];
    const xEnd = (orientation === 'x') ? x  : x + ship.length - 1;
    const yEnd = (orientation === 'y') ? y  : y + ship.length - 1; 
    if (xEnd >= this.matrix.length || xEnd >= this.matrix.length) return -1;
    for (let i = x; i < xEnd + 1; i++) {
      for (let j = y; j < yEnd + 1; j++) {
        gridToOccupy.push([i, j]);
      }
    }
    // check if ship can occupy the whole space 
    for (let i = 0; i < gridToOccupy.length; i++) {
      const isOccupied = this.occupiedGrids
        .filter(item => _.isEqual(item, gridToOccupy[i]))
        .length > 0;
      if (isOccupied) return -1;
      this.matrix[gridToOccupy[i][0]][gridToOccupy[i][1]] = ship;
      this.occupiedGrids.push(gridToOccupy[i]);
    }
    ship.setHeadIndex(x, y);
  }
  // determine if an attack hit a ship, send hit(), record hit coord
  // take in x-coord, y-coord
  // return no results 
  receiveAttack(x, y) {
    const gridContent = this.matrix[x][y];
    if (gridContent !== '' && gridContent !== 'X') {
      const hitPosition = (x - gridContent.headIndex.x) || (y - gridContent.headIndex.y);
      gridContent.hit(hitPosition);
    }
    this.matrix[x][y] = 'X';
  }
  // report if all ships are sunk 
  // take in no parameters 
  // return boolean  
  isAllSunk() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        const gridContent = this.matrix[i][j]
        if (gridContent !== '' && gridContent !== 'X') return false;
      }
    }
    return true;
  }
}

export { Gameboard };