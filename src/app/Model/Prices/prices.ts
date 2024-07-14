import { PriceValue } from "../Enum/price-value";

export interface Prices {
    id: number;
    currency: string;
    value: number;
    priceValue: PriceValue;
}
export class Prices {
    constructor()
    {
        this.id = 0;
        this.currency = '';
        this.value = 0;
        this.priceValue = PriceValue.Total;
    }
}