import _ from 'lodash';
import { addClickEventListener } from './game-logic';

// html body element 
const body = document.querySelector('body');

// create header 
// take in no parameters 
// return no results 
function createHeader() {
  // > container 
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  // >> title 
  const title = document.createElement('h1');
  title.classList.add('header-title');
  title.textContent = 'Battleship';
  // append
  headerContainer.appendChild(title);
  body.appendChild(headerContainer);
}

// create content 
// take in player1, player2, board1, board2
// return no results
function createContent(player1, player2, board1, board2) {
  if (document.getElementsByClassName('content-container').length > 0) {
    document.querySelector('.content-container').remove();
  }
  // > content container
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  // >> board containers 
  const boardContainer = createBoardContainer();
  // apppend 
  contentContainer.appendChild(boardContainer);
  body.appendChild(contentContainer);
  // eventListener
  addClickEventListener(player1, player2, board1, board2);

  // board container 
  function createBoardContainer() {
    // > board containers 
    const container = document.createElement('div');
    container.classList.add('board-container');
    // >> player1 container
    const player1Container = createPlayerContainer('one', player1, board1);
    // >> player2 container
    const player2Container = createPlayerContainer('two', player2, board2);
    // append
    container.append(player1Container);
    container.append(player2Container);
    return container;
  }

  // create player container
  function createPlayerContainer(n, player, board) {
    // > container 
    const container = document.createElement('div');
    container.classList.add('player-container');
    container.classList.add(n);
    // >> name 
    const name = document.createElement('h2');
    name.classList.add('player-name');
    name.classList.add(n);
    name.textContent = player.name;
    // >> gameboard
    const gameboard = createGameboard(n, board);
    // append 
    container.appendChild(name);
    container.appendChild(gameboard);
    return container;
  }

  // create board
  function createGameboard(n, board) {
    // > container
    const container = document.createElement('div');
    container.classList.add('board');
    container.classList.add(n);
    // >> row, col
    for (let i = 0; i < board.matrix.length; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < board.matrix.length; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.dataset.x = i;
        col.dataset.y = j;
        const gridContent = board.matrix[i][j]; 
        if (gridContent !== 'X' || gridContent !== 'x') col.classList.add('active');
        if (gridContent === '' || gridContent === 'x') {
          col.textContent = gridContent;
        } else if (gridContent === 'X') {
          col.textContent = gridContent;
          col.classList.add('disabled-ship');
        } else if (_.isEqual(board, board1)) {
          col.textContent = gridContent.type[0];
          col.classList.add('active-ship');
        }
        row.appendChild(col);
      }
      container.appendChild(row);
    }
    // append 
    return container;
  }
}

// create message 
// take in message
// return no results 
function createMessage(msg) {
  if (document.getElementsByClassName('message-container').length > 0) {
    document.querySelector('.message-container').remove();
  }
  // > container
  const container = document.createElement('div');
  container.classList.add('message-container');
  // >> message 
  const message = document.createElement('h2');
  message.textContent = msg;
  // append 
  container.appendChild(message);
  body.appendChild(container);
}

// create gameover pop up 
// take in message
// return no results 
function createGameoverPopup(msg) {
  // > overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  // > form 
  const form = document.createElement('form');
  form.classList.add('gameover-form');
  // >> message 
  const message = document.createElement('h2');
  message.textContent = msg;
  // >> replay button 
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Play Again';
  // append 
  body.appendChild(overlay);
  form.appendChild(message);
  form.appendChild(button);
  body.appendChild(form);
}

export { createHeader, createContent, createMessage, createGameoverPopup };