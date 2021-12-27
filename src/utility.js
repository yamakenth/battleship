// generate random x, y
// take in no parameters 
// return no results 
function generateRandCoord() {
  return {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10)
  }
}

// place ship on baord randomly 
// take in board, array of ships 
// return no results 
function createRandomLayout(board, ships) {
  let i = 0;
  while (i < ships.length) {
    const { x, y } = generateRandCoord();
    const orientation = (Math.floor(Math.random() * 2) === 0) ? 'x' : 'y';
    const placeShipSuccess = board.placeShip(ships[i], x, y, orientation);
    if (placeShipSuccess === -1) {
      continue;
    }
    i++;
  }
}

export { generateRandCoord, createRandomLayout };