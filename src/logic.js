// ship class 
// take in name, length
// return no results 
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.positions = Array(length).fill(0);
  }
  hit(position) {
    this.positions[position] = 1;
  }
  isSunk() {
    return this.positions.every(item => item === 1);
  }
}

module.exports = { Ship: Ship };