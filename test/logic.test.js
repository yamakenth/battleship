const ships = require('../src/logic');
const Ship = ships.Ship;

describe('Ship class', () => {
  let carrier;
  let patrolBoat;
  beforeEach(() => {
    carrier = new Ship('Carrier', 5);
    patrolBoat = new Ship('Patrol Boat', 2);
  });

  test('carrier hit on first position', () => {
    carrier.hit(0);
    expect(carrier.positions).toEqual([1, 0, 0, 0, 0]);
  });
  test('patrol boat hit on second position', () => {
    patrolBoat.hit(1);
    expect(patrolBoat.positions).toEqual([0, 1]);
  });
  test('carrier hit on third position', () => {
    carrier.hit(2);
    expect(carrier.positions).toEqual([0, 0 ,1, 0, 0]);
  });
  test('carrier hit on second and third position', () => {
    carrier.hit(1);
    carrier.hit(2);
    expect(carrier.positions).toEqual([0, 1 ,1, 0, 0]);
  });
  test('patrol boat is sunk', () => {
    patrolBoat.hit(0);
    patrolBoat.hit(1);
    expect(patrolBoat.isSunk()).toEqual(true);
  });
  test('patrol boat is hit in one position but not sunk', () => {
    patrolBoat.hit(0);
    expect(patrolBoat.isSunk()).toEqual(false);
  });
  test('carrier is hit in tow positions but not sunk', () => {
    carrier.hit(0);
    carrier.hit(1);
    expect(carrier.isSunk()).toEqual(false);
  });
  test('carrier is not hit and not sunk', () => {
    expect(carrier.isSunk()).toEqual(false);
  });
});
