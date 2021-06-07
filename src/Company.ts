import faker from 'faker';
export class Company {
companyName: string;
catchPhrase: string;
location: {
    lat: number;
    lng: number;
}
displayContent: string;
constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }
    this.displayContent = `
    <div>
        <h1>${this.companyName}</h1>
        <p>${this.catchPhrase}</p>
    </div>
    `
}
}