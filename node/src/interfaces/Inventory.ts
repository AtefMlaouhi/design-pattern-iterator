import { Item, Iterator } from '.';

export interface Inventory {
    items: Item[];
    getIterator(): Iterator;
}