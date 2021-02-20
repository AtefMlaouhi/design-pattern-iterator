import { ClassNode } from '../src';

describe("Iterator pattern", function () {
  let service: ClassNode;
  beforeEach(function () {
    service = new ClassNode();
  });

  afterEach(function () {
    service = null;
  })


  it("Can create instance of ClassNode", function () {
    expect(service).toBeTruthy();
  });

});