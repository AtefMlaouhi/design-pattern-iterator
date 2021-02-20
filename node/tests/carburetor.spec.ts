import { Carburetor } from '../src';

describe("Iterator pattern: Carburetor Item", function () {
  let service: Carburetor;
  beforeEach(function () {
    service = new Carburetor();
  });

  afterEach(function () {
    service = null;
  })

  it("Can create instance of Carburetor", function () {
    expect(service).toBeTruthy();
    expect(service instanceof Carburetor).toBeTruthy();
  });
});