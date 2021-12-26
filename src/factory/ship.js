// ship factory
class Ship {
  // take in type of ship and length 
  // keep track of hit positions by an array { 0: not hit, 1: hit }
  constructor(type, length) {
    this.type = type;
    this.length = length;
    this.positions = Array(length).fill(0);
  }
  // modify positions array 
  // take in position of hit 
  // return no results 
  hit(position) {
    this.positions[position] = 1;
  }
  // determine if ship is sunk (all positions hit)
  // take in no parameters
  // return boolean of ship status 
  isSunk() {
    return this.positions.every(item => item === 1);
  }
}

module.exports = { Ship: Ship };