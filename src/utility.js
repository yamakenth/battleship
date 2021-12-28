import _ from 'lodash';

// generate random x, y
// take in no parameters 
// return no results 
function generateRandCoord() {
  return {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10)
  }
}

// check if two arrays of arrays have at least one common element
// take in arr1, arr2
// return boolen 
function shareSameElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (_.isEqual(arr1[i], arr2[j])) return true;
    }
  }
  return false;
}

// place ship on baord randomly 
// take in board, array of ships 
// return no results 
function createRandomLayout(board, ships) {
  let i = 0;
  while (i < ships.length) {
    const { x, y } = generateRandCoord();
    const orientation = (Math.floor(Math.random() * 2) === 0) ? 'x' : 'y';
    console.log(`${ships[i].type}(${ships[i].length}): (${x}, ${y}), ${orientation}`);
    
    const placeShipStatus = board.placeShip(ships[i], x, y, orientation);
    console.log(placeShipStatus);
    
    i++;
  }
}

export { generateRandCoord, createRandomLayout, shareSameElement };