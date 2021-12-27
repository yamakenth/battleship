class Gameboard {
  // constructor (10x10 array, {shipType: {shipObj, position: {x, y}}})
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
      position: { x, y }
    };
  }
  // determine if an attech hit a ship, send hit(), record hit coord
  // take in x-coord, y-coord
  // return no results 
  receiveAttack(x, y) {
    const curGridItem = this.matrix[x][y];
    if (curGridItem !== '') {
      const curShip = this.ships[curGridItem];
      const curShipObj = curShip.shipObj;
      const hitPosition = (x - curShip.position.x) || (y - curShip.position.y);
      curShipObj.hit(hitPosition);
    }
    this.matrix[x][y] = 'X';
  }
  // report if all ships are sunk 
  // take in no parameters 
  // return boolean  
  isAllSunk() {
    for (const shipType in this.ships) {
      if (this.ships[shipType].shipObj.isSunk() === false) return false;
    }
    return true;
  }
}

export { Gameboard };