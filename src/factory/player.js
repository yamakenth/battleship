import _ from 'lodash';

class Player {
  // constructor
  constructor(name) {
    this.name = name;
    this.history = [];
  }
  // add grid to arr
  // take in x-coord, y-coord
  // return no results 
  updateHistory(x, y) {
    const itemExists = this.history.filter(item => _.isEqual(item, [x, y])).length > 0;
    if (!itemExists) this.history.push([x, y]);
  }
  // generate AI move
  // take in no paramets 
  // return { x, y } 
  generateMove() {
    const randX = Math.floor(Math.random() * 10);
    const randY = Math.floor(Math.random() * 10);
    const itemExists = this.history.filter(item => _.isEqual(item, [randX, randY])).length > 0;
    if (itemExists) this.generateMove();
    return { x: randX, y: randY };
  }
}

export { Player };