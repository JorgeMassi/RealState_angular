export interface Addresses {
    id: number
    street: string
    city: string
    state: string
    country: string
    zipCode: string
    location: string

}
export class Addresses
{
    constructor(){
        this.id = 0;
        this.street = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zipCode = '';
        this.location = '';
    }
}
