import { Gameboard } from '../src/factory/gameboard';
import { Ship } from '../src/factory/ship';


describe('test gameboard ship placement', () => {
  let board;
  let destroyer;
  let patrolBoat;
  beforeEach(() => {
    board = new Gameboard();
    destroyer = new Ship('Destroyer', 3);
    patrolBoat = new Ship('Patrol Boat', 2);
  });
  test('matrix with destroyer placed horizontally at (0, 0)', () => {
    board.placeShip(destroyer, 0, 0, 'x');
    expect(board.matrix).toEqual([
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
  test('matrix with patrol boat placed vertically at (4, 9)', () => {
    board.placeShip(patrolBoat, 4, 9, 'y');
    expect(board.matrix).toEqual([
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
  test('matrix with multiple ships', () => {
    board.placeShip(destroyer, 0, 0, 'x');
    board.placeShip(patrolBoat, 4, 9, 'y');
    expect(board.matrix).toEqual([
      ['Destroyer', 'Destroyer', 'Destroyer', '', '', '', '', '', '', ''],
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
  test('ships obj with destroyer placed horizontally at (0, 0)', () => {
    board.placeShip(destroyer, 0, 0, 'x');
    expect(board.ships).toEqual({
      'Destroyer': { 
        shipObj: destroyer, 
        position: { x: 0, y: 0 }}
    });
  });
  test('ships obj with patrol boat boa placed horizontally at (4, 9)', () => {
    board.placeShip(patrolBoat, 4, 9, 'y');
    expect(board.ships).toEqual({
      'Patrol Boat': { 
        shipObj: patrolBoat, 
        position: { x: 4, y: 9 }}
    });
  });
});

describe.skip('test receiveAttack', () => {
  let board;
  let destroyer;
  let patrolBoat;
  beforeEach(() => {
    board = new Gameboard();
    destroyer = new Ship('Destroyer', 3);
    patrolBoat = new Ship('Patrol Boat', 2);
  });

  test('hit a destroyer placed at (2, 3) vertically', () => {
    board.placeShip(destroyer, [2, 3], 'y');
    board.receiveAttack([3, 3]);
    expect(board.board).toEqual([
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'Destroyer', '', '', '', '', '', ''],
      ['', '', '', 'X', '', '', '', '', '', ''],
      ['', '', '', 'Destroyer', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]);
  });
  test('no hit', () => {
    board.placeShip(destroyer, [2, 3], 'y');
    board.receiveAttack([0, 1]);
    expect(board.board).toEqual([
      ['', 'X', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', 'Destroyer', '', '', '', '', '', ''],
      ['', '', '', 'Destroyer', '', '', '', '', '', ''],
      ['', '', '', 'Destroyer', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
    ]);
  });
});