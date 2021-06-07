import {User} from './User';
import {Company} from './Company';

interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

//The goal is to hide what all you can do with the map object so that other devs don't break anything.
export class CustomMap {
    //By giving it a modifier of private we make is that googleMap is only available to be used inside of CustomMap.
    private googleMap: google.maps.Map;
    constructor(id: string){
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1, 
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMaker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: 'GO JAZZ!!!'
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
} 