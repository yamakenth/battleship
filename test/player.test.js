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