import { HandHeldInventoryIterator } from './handHeldInventoryIterator';
import { Inventory, Item, Iterator } from '.';


export class HandHeldInventory implements Inventory {
    current: Item;
    next: Item;
    items: Item[] = [];

    constructor(items?: Item[]) {
        this.items = items;
        this.current = items ? items[0] : null;
        this.next = items && items.length > 1 ? items[1] : null;
    }
    public getNext(): Item {
        this.setNext();
        return this.next;
    }

    public getCurrent(): Item {
        return this.current;
    }

    public getIterator(): Iterator {
        return new HandHeldInventoryIterator(this);
    }

    private setNext() {
        const position = this.items.indexOf(this.current);
        this.next = position > -1 && position < this.items.length
            ? this.items[position + 1]
            : null
        this.current = this.next;
    }
}