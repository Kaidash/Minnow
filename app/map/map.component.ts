/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'map-component',
    template: `  
        <sebm-google-map [latitude]="lat" [styles]="stylesMap" [longitude]="lng">
            <sebm-google-map-marker *ngFor="let place of places" (markerClick)="clickedMarker(place)" [latitude]="place.lat" [longitude]="place.lng">
                <!--<sebm-google-map-info-window>-->
                    <!--<p><b>Название</b> : {{place.name}}</p>-->
                <!--</sebm-google-map-info-window>-->
            </sebm-google-map-marker>
        </sebm-google-map>
        <h1 [style.display]="styleInfo"><b>Название водоема :</b> {{placeName}}</h1>
        <p *ngFor = "let comment of commentsCollection ">{{comment}}</p>
    `
})

export class MapComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    placeName: string = '';
    styleInfo:string = 'none';
    commentsCollection:any[]=[];
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
            comments:['Hello','Hello!!'],
            status:true,
            userName:'Nikita',
            img:'http://localhost:3000/'
        },
        {
            name: 'Krasnyy Oslik2',
            lat: 50,
            lng:36,
            comments:['Hihihi','Trololo'],
            status:true,
            userName:'Oleg',
            img:'http://localhost:3000/'
        },
        {
            name: 'Krasnyy Oslik3',
            lat: 49.96,
            lng:36,
            comments:['lslsls','ssss'],
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
    clickedMarker(place){
        console.log(place);
        this.styleInfo = 'block';
        this.placeName = place.name;
        this.commentsCollection=place.comments;
    }

}