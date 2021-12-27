import './style.css';
import { Gameboard } from './factory/gameboard';
import { Player } from './factory/player';
import { Ship } from './factory/ship';
import { createContent, createHeader } from './ui-element';

// initialize new game 
const player = new Player('Player');
const boardP1 = new Gameboard();
const computer = new Player('Computer');
const boardComputer = new Gameboard();

// create header 
createHeader();
// create content 
createContent('Player\s Turn (test)', player, computer, boardP1, boardComputer);