import _ from 'lodash';

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
    const randX = Math.floor(Math.random() * 10);
    const randY = Math.floor(Math.random() * 10);
    const itemExists = this.history.filter(item => _.isEqual(item, [randX, randY])).length > 0;
    if (!itemExists) {
      this.history.push([x, y]);
      return { x: randX, y: randY };
    }
    this.generateMove();
  }
}

export { Player };