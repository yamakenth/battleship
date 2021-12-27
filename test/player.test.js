import { Player } from '../src/factory/player';
import { Gameboard } from '../src/factory/gameboard';

describe('updateHistory', () => {
  let board;
  let player1;
  beforeEach(() => {
    board = new Gameboard();
    player1 = new Player('Player 1');
  });
  test('play a legal move', () => {
    player1.updateHistory(0, 0);
    expect(player1.history).toEqual([[0, 0]]);
  });
  test('play an illegal move', () => {
    player1.updateHistory(1, 1);
    player1.updateHistory(1, 1);
    expect(player1.history).toEqual([[1, 1]]);
  });
});

describe('generateMove', () => {
  let board;
  let computer;
  beforeEach(() => {
    board = new Gameboard();
    computer = new Player('AI');
  });
  test('play a move', () => {
    computer.updateHistory(0, 0);
    const newMove = computer.generateMove();
    computer.updateHistory(newMove.x, newMove.y);
    expect(computer.history.length === 1 || computer.history.length === 2).toBeTruthy();
  });
});