import './style.css';
import { Gameboard } from './factory/gameboard';
import { Player } from './factory/player';
import { Ship } from './factory/ship';
import { createContent, createHeader, createStart } from './ui-element';

// initialize new game 
const player = new Player('Player');
const boardP1 = new Gameboard();
const computer = new Player('Computer');
const boardComputer = new Gameboard();

// create header 
createHeader();
// populate player's board
(function() {
  const carrier = new Ship('Carrier', 5);
  boardP1.placeShip(carrier, 2, 5, 'x');
  const battleship = new Ship('Battleship', 4);
  boardP1.placeShip(battleship, 5, 8, 'y');
  const destroyer = new Ship('Destroyer', 3);
  boardP1.placeShip(destroyer, 4, 4, 'y');
  const submarine = new Ship('Submarine', 3);
  boardP1.placeShip(submarine, 8, 2, 'x');
  const patrolBoat = new Ship('Patrol Boat', 2);
  boardP1.placeShip(patrolBoat, 0, 1, 'x');
})();
// populate computer's board
(function() {
  const carrier = new Ship('Carrier', 5);
  boardComputer.placeShip(carrier, 4, 7, 'y');
  const battleship = new Ship('Battleship', 4);
  boardComputer.placeShip(battleship, 2, 1, 'y');
  const destroyer = new Ship('Destroyer', 3);
  boardComputer.placeShip(destroyer, 7, 1, 'y');
  const submarine = new Ship('Submarine', 3);
  boardComputer.placeShip(submarine, 4, 3, 'x');
  const patrolBoat = new Ship('Patrol Boat', 2);
  boardComputer.placeShip(patrolBoat, 2, 7, 'x');
})();
// create content 
createContent('Player\s Turn (test)', player, computer, boardP1, boardComputer);
// create start 
createStart();