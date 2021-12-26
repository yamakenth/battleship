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
    destroyer = new Ship('Destoryer', 3);
    patrolBoat = new Ship('Patrol Boat', 2);
  });
  
  test('place destroyer horizontally at (0, 0)', () => {
    board.placeShip(destroyer, [0, 0], 'x');
    expect(board.board).toEqual([
      ['O', 'O', 'O', '', '', '', '', '', '', ''],
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
      ['', '', '', '', '', '', '', '', '', 'O'],
      ['', '', '', '', '', '', '', '', '', 'O'],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]);
  });
});