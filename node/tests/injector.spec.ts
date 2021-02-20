import { Injector } from '../src';

describe("Iterator pattern: Injector Item", function () {
  let service: Injector;
  beforeEach(function () {
    service = new Injector();
  });

  afterEach(function () {
    service = null;
  })

  it("Can create instance of Injector", function () {
    expect(service).toBeTruthy();
    expect(service instanceof Injector).toBeTruthy();
  });
});