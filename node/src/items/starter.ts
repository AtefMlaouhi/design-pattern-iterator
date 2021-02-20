import { Item } from '../interfaces';

export class Starter implements Item {

    constructor() { }

    name(): string {
        return "Starter";
    }
}