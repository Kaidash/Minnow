/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'map-component',
    template: `  
        <sebm-google-map [latitude]="lat" [styles]="stylesMap" [longitude]="lng">
            <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
        </sebm-google-map>
    `
})

export class MapComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;

    stylesMap: any[] =[
        {
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -20 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ]
    ngOnInit() {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position:any)=>{
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude
            }
        , null);
        }
        else
        {
            alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
        }

    }

}