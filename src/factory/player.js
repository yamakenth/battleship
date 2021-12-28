import _ from 'lodash';
import { generateRandCoord } from '../utility';

class Player {
  // constructor
  constructor(name) {
    this.name = name;
    this.history = [];
  }

  // generate AI move
  // take in no paramets 
  // return { x, y } 
  generateMove() {
    let itemExists = true;
    let x;
    let y;
    while(itemExists) {
      ({ x, y } = generateRandCoord());
      itemExists = this.history.filter(item => _.isEqual(item, [x, y])).length > 0;
    }
    this.history.push([x, y]);
    return { x, y };
  }
}

export { Player };