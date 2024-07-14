
import { Typology } from "../Typologies/typology";
import { Conditions } from "../Enum/conditions";
import { Prices } from "../Prices/prices";
import { Addresses } from "../Address/addresses";
import { User } from "../Users/user";

export interface Properties {
    id: string;
    typology: Typology;
    location: Addresses;
    yearBuild: number;
    totalArea: number;
    rooms: number;
    floors: number;
    bathrooms: number;
    garage: boolean;
    energyRating: string;
    condition: Conditions;
    description: string;
    features: string;
    user: User;
    price: Prices;
}
export class Properties
{

    constructor() {
        this.id = '';
        this.typology = new Typology();
        this.location = new Addresses();
        this.yearBuild = 0;
        this.totalArea = 0;
        this.rooms = 0;
        this.floors = 0;
        this.bathrooms = 0;
        this.garage = false;
        this.energyRating = '';
        this.description = ''; 
        this.features = '';
        this.user = new User();
        this.price = new Prices();
        this.condition = Conditions.New;
    }
}