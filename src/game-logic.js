import { createContent, createGameoverPopup, createMessage } from "./ui-element";

// add eventListener to respond to click and play game 
// take in player1, player2, board1, board2
// return no results 
function addClickEventListener(player1, player2, board1, board2) {
  const grids = document.querySelectorAll('.board.two .col');
  grids.forEach(grid => {
    grid.addEventListener('click', () => {
      // if already clicked then do nothing  
      if (
        board2.matrix[grid.dataset.x][grid.dataset.y] === 'X'
        || board2.matrix[grid.dataset.x][grid.dataset.y] === 'x') return;
      // player move
      const attackStatus = board2.receiveAttack(grid.dataset.x, grid.dataset.y);
      // if player's move is legal 
      if (attackStatus === 1) {
        // render computer's board
        createContent(player1, player2, board1, board2);
        if (board2.isAllSunk()) {
          const msg = `${player1.name} won!`;
          createMessage(msg);
          createGameoverPopup(msg);
          return;
        }
        createMessage('Computer\'s turn');
        setTimeout(() => {
          // computer move 
          const compMove = player2.generateMove();
          board1.receiveAttack(compMove.x, compMove.y);
          // render player's board 
          createContent(player1, player2, board1, board2);
          if (board1.isAllSunk()) {
            const msg = `${player2.name} won!`;
            createMessage();
            createGameoverPopup(msg);
            return;
          }
          createMessage('Player\'s turn');
        }, 1000);
      }
    });
  });
}

export { addClickEventListener };