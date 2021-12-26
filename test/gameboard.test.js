const gameboard = require('../src/factory/gameboard');
const Gameboard = gameboard.Gameboard;
const ships = require('../src/factory/ship');
const Ship = ships.Ship;

describe('test gameboard ship placement', () => {
  let board;
  let destroyer;
  let patrolBoat;
  beforeEach(() => {
    board = new Gameboard();
    destroyer = new Ship('Destroyer', 3);
    patrolBoat = new Ship('Patrol Boat', 2);
  });
  
  test('place destroyer horizontally at (0, 0)', () => {
    board.placeShip(destroyer, [0, 0], 'x');
    expect(board.board).toEqual([
      ['Destroyer', 'Destroyer', 'Destroyer', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]);
  });
  test('place patrol boat vertically at (4, 9)', () => {
    board.placeShip(patrolBoat, [4, 9], 'y');
    expect(board.board).toEqual([
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', 'Patrol Boat'],
      ['', '', '', '', '', '', '', '', '', 'Patrol Boat'],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]);
  });
});

describe.skip('test receiveAttack', () => {
  let board;
  let destroyer;
  let patrolBoat;
  beforeEach(() => {
    board = new Gameboard();
    destroyer = new Ship('Destoryer', 3);
    patrolBoat = new Ship('Patrol Boat', 2);
  });

  test('hit a destroyer placed at (2, 3) vertically', () => {
    board.placeShip(destroyer, [2, 3], 'y');

  });
  test('no hit', () => {

  });
});