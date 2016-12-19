/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'map-component',
    template: `  
        <sebm-google-map [latitude]="lat" [styles]="stylesMap" [longitude]="lng">
            <sebm-google-map-marker *ngFor="let place of places" (markerClick)="clickedMarker()" [latitude]="place.lat" [longitude]="place.lng">
                <sebm-google-map-info-window>
                    <p><b>Название</b> : {{place.name}}</p>
                </sebm-google-map-info-window>
            </sebm-google-map-marker>
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
    ];

    places:any[]=[
        {
            name: 'Krasnyy Oslik',
            lat: 49,
            lng:36,
            comments:[],
            status:true,
            userName:'Nikita',
            img:'http://localhost:3000/'
        },
        {
            name: 'Krasnyy Oslik2',
            lat: 50,
            lng:36,
            comments:[],
            status:true,
            userName:'Oleg',
            img:'http://localhost:3000/'
        },
        {
            name: 'Krasnyy Oslik3',
            lat: 49.96,
            lng:36,
            comments:[],
            status:true,
            userName:'Stas',
            img:'http://localhost:3000/'
        },
    ];

    ngOnInit() {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position:any)=>{
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude
            }
        , null);
        }
    }
    clickedMarker(){
        console.log("123")
    }

}