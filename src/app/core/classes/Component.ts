import { ComponentProperties } from "./ComponentProperties";

export class Component {
    name: string;
    properties: ComponentProperties[];

    constructor(name: string, properties: ComponentProperties[]) {
        this.name = name;
        this.properties = properties;
    }
}