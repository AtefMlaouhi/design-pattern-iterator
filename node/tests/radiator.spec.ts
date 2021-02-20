import { Radiator } from '../src';

describe("Iterator pattern: Radiator Item", function () {
  let service: Radiator;
  beforeEach(function () {
    service = new Radiator();
  });

  afterEach(function () {
    service = null;
  })

  it("Can create instance of Radiator", function () {
    expect(service).toBeTruthy();
    expect(service instanceof Radiator).toBeTruthy();
  });
});