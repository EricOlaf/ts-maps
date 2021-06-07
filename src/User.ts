import faker from 'faker';
import { Mappable } from './CustomMap';
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    displayContent: string;
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())            
        }
        this.displayContent= `User Name: ${this.name}`;
    }
}