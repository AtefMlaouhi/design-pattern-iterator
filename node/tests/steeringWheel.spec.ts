import { SteeringWheel } from '../src';

describe("Iterator pattern: SteeringWheel Item", function () {
  let service: SteeringWheel;
  beforeEach(function () {
    service = new SteeringWheel();
  });

  afterEach(function () {
    service = null;
  })

  it("Can create instance of SteeringWheel", function () {
    expect(service).toBeTruthy();
    expect(service instanceof SteeringWheel).toBeTruthy();
  });
});