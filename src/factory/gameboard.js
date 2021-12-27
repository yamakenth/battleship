class Gameboard {
  // constructor
  constructor() {
    this.matrix = Array.from(Array(10), () => new Array(10).fill(''));
  }
  // place ship in matrix and update ships starting grid
  // take in ship, x-coord, y-coord, orientation (x/y)
  // return no results 
  placeShip(ship, x, y, orientation) {
    ship.setHeadIndex(x, y);
    const xEnd = (orientation === 'x') ? x + 1 : x + ship.length;
    const yEnd = (orientation === 'y') ?  y + 1 : y + ship.length; 
    for (let row = x; row < xEnd; row++) {
      for (let col = y; col < yEnd; col++) {
        this.matrix[row][col] = ship;
      }
    }
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