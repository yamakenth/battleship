import { Ship } from '../src/factory/ship';

describe('ship is hit', () => {
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
});

describe('ship is sunk', () => {
  let carrier;
  beforeEach(() => {
    carrier = new Ship('Carrier', 5);
  });
  test('carrier boat is sunk', () => {
    for (let i = 0; i < 5; i++) {
      carrier.hit(i);
    }
    expect(carrier.isSunk()).toEqual(true);
  });
  test('carrier is hit in one position but not sunk', () => {
    carrier.hit(3);
    expect(carrier.isSunk()).toEqual(false);
  });
  test('carrier is hit in two positions but not sunk', () => {
    carrier.hit(0);
    carrier.hit(3);
    expect(carrier.isSunk()).toEqual(false);
  });
  test('carrier is not hit and not sunk', () => {
    expect(carrier.isSunk()).toEqual(false);
  });
});