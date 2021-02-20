import { Item } from '../interfaces';

export class Injector implements Item {

    constructor() { }

    name(): string {
        return "Injector";
    }
}