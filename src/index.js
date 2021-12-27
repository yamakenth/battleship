import './style.css';
import { Gameboard } from './factory/gameboard';
import { Player } from './factory/player';
import { Ship } from './factory/ship';
import { createRandomLayout } from './utility';
import { createContent, createHeader, createMessage } from './ui-element';
import { addClickEventListener } from './game-logic';


// initialize player 1 
const board1 = new Gameboard();
const ships1 = [
  new Ship('Carrier', 5),
  new Ship('Battleship', 4),
  new Ship('Destroyer', 3),
  new Ship('Submarine', 3),
  new Ship('Patrol Boat', 2)
]
createRandomLayout(board1, ships1);
const player1 = new Player('Player');
// initialize player 2
const board2 = new Gameboard();
const ships2 = [
  new Ship('Carrier', 5),
  new Ship('Battleship', 4),
  new Ship('Destroyer', 3),
  new Ship('Submarine', 3),
  new Ship('Patrol Boat', 2)
]
createRandomLayout(board2, ships2);
const player2 = new Player('Computer');

// create initial display 
createHeader();
createContent(player1, player2, board1, board2);
createMessage('Player\'s turn');

// add click eventListener to grids
addClickEventListener(player1, player2, board1, board2);