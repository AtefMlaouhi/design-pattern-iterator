import { Item } from '../interfaces';

export class Carburetor implements Item {

    constructor() { }

    name(): string {
        return "Carburetor";
    }
}