import { HandHeldInventory } from './handHeldInventory';
import { Iterator, Item } from '.';


export class HandHeldInventoryIterator implements Iterator {
    public index: number = 0;
    inventory: HandHeldInventory;
    length: number = 0;

    constructor(inventory: HandHeldInventory) {
        this.inventory = inventory;
        this.setLength();
    }
    addItem(item: Item): void {
        if (this.inventory.items.indexOf(item) < 0) {
            this.inventory.items.push(item);
        }
        this.setLength();
    }

    isDone(): boolean {
        return this.index > this.length;
    }

    public next() {
        this.index += 1;
    }

    public currentItem(): Item {
        if (this.index < this.inventory.items.length && this.index === this.inventory.items.indexOf(this.inventory.getCurrent()))
            return this.inventory.getCurrent();
        else if (this.index > -1)
            return this.inventory.getNext();
        else
            return null;
    }

    private setLength() {
        this.length = this.inventory.items?.length - 1 ?? 0;
    }
}