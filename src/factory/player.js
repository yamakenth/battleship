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
}

export { Player };