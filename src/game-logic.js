import { createContent, createMessage } from "./ui-element";

// add eventListener to respond to click and play game 
// take in player1, player2, board1, board2
// return no results 
function addClickEventListener(player1, player2, board1, board2) {
  const grids = document.querySelectorAll('.board.two .col');
  grids.forEach(grid => {
    grid.addEventListener('click', () => {
      console.log(`clicked (${grid.dataset.x}, ${grid.dataset.y})`);
      // player move
      playPlayer(grid, player1, player2, board1, board2);
      // computer move 
      console.log('NO');
      
    });
  });
}

// player play game 
// take grid, player1, player2, board1, board2
// return no results 
function playPlayer(grid, player1, player2, board1, board2) {
  board2.receiveAttack(grid.dataset.x, grid.dataset.y);
  createContent(player1, player2, board1, board2);
  createMessage('skeet');
}

export { addClickEventListener };