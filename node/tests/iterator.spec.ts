import { Inventory, Carburetor, HandHeldInventory, Injector, Iterator, Radiator, Starter, HandHeldInventoryIterator, SteeringWheel, } from '../src';

describe("Iterator pattern", function () {
  let service: Inventory;
  let handler: Iterator;
  beforeEach(function () {
    service = new HandHeldInventory();
    handler = new HandHeldInventoryIterator(service as HandHeldInventory);
  });

  afterEach(function () {
    service = null;
  })


  it("Can create instance of HandHeldInventory", function () {
    expect(service).toBeTruthy();
    expect(service).toBeInstanceOf(HandHeldInventory);
  });

  it("Can create instance of HandHeldInventoryIterator", function () {
    expect(handler).toBeTruthy();
    expect(handler).toBeInstanceOf(HandHeldInventoryIterator);
  });


  it("Can create Iterator with one item", function () {

    const inventory: Inventory = new HandHeldInventory([new Starter()]);
    const iterator: Iterator = inventory.getIterator();
    while (!iterator.isDone()) {
      expect(iterator.currentItem()).toBeInstanceOf(Starter);
      expect(iterator.currentItem().name()).toEqual('Starter');
      iterator.next();
    }
    expect(inventory.items.length).toEqual(1);
  });

  it("Can create Iterator with tow item", function () {
    const inventory: Inventory = new HandHeldInventory([new Starter(), new Injector()]);
    const iterator: Iterator = inventory.getIterator();
    let index = 0;
    while (!iterator.isDone()) {
      expect(iterator.currentItem()).toBeInstanceOf(index === 0 ? Starter : Injector);
      expect(iterator.currentItem().name()).toEqual(index === 0 ? 'Starter' : 'Injector');
      iterator.next();
      index++;
    }
    expect(inventory.items.length).toEqual(2);
  });

  it("Can create Iterator with multiple item", function () {
    const inventory: Inventory = new HandHeldInventory([new Radiator(), new Injector(), new SteeringWheel(), new Carburetor()]);
    const iterator: Iterator = inventory.getIterator();
    const listInstance = [Radiator, Injector, SteeringWheel, Carburetor];
    let index = 0;
    while (!iterator.isDone()) {
      expect(iterator.currentItem()).toBeInstanceOf(listInstance[index]);
      expect(iterator.currentItem().name()).toEqual(listInstance[index].name);
      iterator.next();
      index++;
    }
    expect(inventory.items.length).toEqual(4);
  });


  it("Can create Iterator with multiple item and add item", function () {
    const inventory: Inventory = new HandHeldInventory([new Radiator(), new Injector(), new SteeringWheel(), new Carburetor()]);
    const iterator: Iterator = inventory.getIterator();
    let listInstance = [Radiator, Injector, SteeringWheel, Carburetor];
    let index = 0;
    expect(inventory.items.length).toEqual(4);
    while (!iterator.isDone()) {
      expect(iterator.currentItem()).toBeInstanceOf(listInstance[index]);
      expect(iterator.currentItem().name()).toEqual(listInstance[index].name);
      if (iterator.currentItem().name() === 'SteeringWheel') {
        iterator.addItem(new Carburetor());
        listInstance.push(Carburetor)
      }
      iterator.next();
      index++;
    }
    expect(inventory.items.length).toEqual(5);
  });

});