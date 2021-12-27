class Ship {
  // constructor 
  constructor(type, length) {
    this.type = type;
    this.length = length;
    this.positions = Array(length).fill(0);
    this.headIndex = {};
  }
  // set first index of ship 
  // take in x, y 
  // return no result 
  setHeadIndex(x, y) {
    this.headIndex = { x, y };
  }
  // modify positions array when hit 
  // take in hit position 
  // return no results 
  hit(position) {
    this.positions[position] = 1;
  }
  // determine if ship is sunk
  // take in no parameters 
  // return boolean 
  isSunk() {
    return this.positions.every(item => item === 1);
  }
}

export { Ship };