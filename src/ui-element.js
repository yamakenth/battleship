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
  title.textContent = 'BattleShip';
  // append
  headerContainer.appendChild(title);
  body.appendChild(headerContainer);
}

// create content 
// take in player1, player2, board1, board2
// return no results
function createContent(player1, player2, board1, board2) {
  // > content container
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  // >> board containers 
  const boardContainer = createBoardContainer();
  // apppend 
  contentContainer.appendChild(boardContainer);
  body.appendChild(contentContainer);

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
    const name = document.createElement('h3');
    name.classList.add('player-name');
    name.classList.add(n);
    name.textContent = player.name;
    // >> gameboard
    const gameboard = createGameboard(n, board);
    // >> active ships 
    const activeShips = createActiveShipDisplay();
    // append 
    container.appendChild(name);
    container.appendChild(gameboard);
    container.appendChild(activeShips);
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
        col.textContent = (!gridContent) ? '' : gridContent.type[0];
        row.appendChild(col);
      }
      container.appendChild(row);
    }
    // append 
    return container;
  }

  // create activbe ship display
  function createActiveShipDisplay() {
    // > container
    const container = document.createElement('div');
    container.classList.add('active-ships');
    // >> ships
    const ships = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol-boat'];
    ships.forEach(ship => {
      const symbol = document.createElement('h3');
      symbol.classList.add(ship);
      symbol.textContent = ship;
      container.appendChild(symbol);
    });
    return container;
  }
}

// create message 
// take in message
// return no results 
function createMessage(msg) {
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

export { createHeader, createContent, createMessage };