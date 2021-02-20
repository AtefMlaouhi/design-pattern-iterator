import { Starter } from '../src';

describe("Iterator pattern: Starter Item", function () {
  let service: Starter;
  beforeEach(function () {
    service = new Starter();
  });

  afterEach(function () {
    service = null;
  })

  it("Can create instance of Starter", function () {
    expect(service).toBeTruthy();
    expect(service instanceof Starter).toBeTruthy();
  });
});