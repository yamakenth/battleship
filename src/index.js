import './style.css';
import { Gameboard } from './factory/gameboard';
import { Player } from './factory/player';
import { Ship } from './factory/ship';
import { createHeader } from './ui-element';

// initialize new game 
const player = new Player('Player');
const boardP1 = new Gameboard();
const computer = new Player('AI');
const boardComputer = new Gameboard();

// create header 
createHeader();