//The goal is to hide what all you can do with the map object so that other devs don't break anything.
export class CustomMap {
    //By giving it a modifier of private we make is that googleMap is only available to be used inside of CustomMap.
    private googleMap: google.maps.Map;
    constructor(id: string){
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 13, 
            center: {
                lat: 32.7767,
                lng: -96.7970
            }
        })
    }
} 