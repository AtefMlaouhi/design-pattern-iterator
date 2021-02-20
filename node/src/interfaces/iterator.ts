import { Item } from './item';

export interface Iterator {
    isDone(): boolean;
    next(): void;
    currentItem(): Item;
    addItem(item: Item): void;
    index: number;
    length: number;
}