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
    const randCoord = generateRandCoord();
    const itemExists = this.history
      .filter(item => _.isEqual(item, [randCoord.x, randCoord.y]))
      .length > 0;
    if (!itemExists) {
      this.history.push([x, y]);
      return { x: randCoord.x, y: randCoord.y };
    }
    this.generateMove();
  }
}

export { Player };