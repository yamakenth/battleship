// generate random x, y
// take in no parameters 
// return no results 
function generateRandCoord() {
  return {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10)
  }
}

export { generateRandCoord };