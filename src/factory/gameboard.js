import { shareSameElement } from '../utility';
import { Ship } from './ship';

class Gameboard {
  // constructor
  constructor() {
    this.matrix = Array.from(Array(10), () => new Array(10).fill(''));
    this.occupiedGrids = [];
  }

  // place ship in matrix and update ships starting grid
  // take in ship, x-coord, y-coord, orientation (x/y)
  // return 1 if success -1 if fail
  placeShip(ship, x, y, orientation) {
    // determine end grids
    const xEnd = (orientation === 'x') ? x  : x + ship.length - 1;
    const yEnd = (orientation === 'y') ? y  : y + ship.length - 1; 
    // check if out of bounds 
    if (xEnd >= this.matrix.length || yEnd >= this.matrix.length) return -1;
    // list of grids ship will occupy 
    const gridToOccupy = [];
    for (let i = x; i < xEnd + 1; i++) {
      for (let j = y; j < yEnd + 1; j++) {
        gridToOccupy.push([i, j]);
      }
    }
    // check if ship can occupy whole space 
    const canOccupy = !shareSameElement(gridToOccupy, this.occupiedGrids);
    // if can occupy then push and set ship head index 
    if (canOccupy) {
      for (let i = 0; i < gridToOccupy.length; i++) {
        this.matrix[gridToOccupy[i][0]][gridToOccupy[i][1]] = ship;
        this.occupiedGrids.push(gridToOccupy[i]);
      }
      ship.setHeadIndex(x, y);
    } else {
      return -1;
    }
    // return 1 when success
    return 1;
  }

  // determine if an attack hit a ship, send hit(), record hit coord
  // take in x-coord, y-coord
  // return 1 if valid attack -1 otherwise
  receiveAttack(x, y) {
    const gridContent = this.matrix[x][y];
    // if grid is already attacked then invalid 
    if (gridContent === 'X') {
      return -1;
    }
    // if attack hits a ship 
    if (gridContent instanceof Ship) {
      const hitPosition = (x - gridContent.headIndex.x) || (y - gridContent.headIndex.y);
      gridContent.hit(hitPosition);
      this.matrix[x][y] = 'X';
    } else {
      this.matrix[x][y] = 'x';
    }
    return 1;
  }

  // report if all ships are sunk 
  // take in no parameters 
  // return boolean  
  isAllSunk() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        const gridContent = this.matrix[i][j]
        if (gridContent !== '' && gridContent !== 'X' && gridContent !== 'x') return false;
      }
    }
    return true;
  }
}

export { Gameboard };