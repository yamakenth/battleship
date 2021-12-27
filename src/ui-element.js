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

export {
  createHeader
}