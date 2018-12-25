// example for testing with mocha]

class Car {
  park(){
    return 'car is stopped';
  }

  drive(){
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
})

describe('car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'car is stopped');
  });

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
