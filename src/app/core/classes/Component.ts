import { ComponentProperties } from "./ComponentProperties";

export class Component {
    name: string;
    properties: ComponentProperties[];
    isRecommended: boolean = false;
    imgUrl: string = '';

    constructor(name: string, imgUrl: string, properties: ComponentProperties[]) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.properties = properties;
    }
}