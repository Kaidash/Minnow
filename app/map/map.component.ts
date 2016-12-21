/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit,Input } from '@angular/core';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';

@Component({
    moduleId: module.id,
    templateUrl: 'map.component.html',
    selector: 'map-component'
})

export class MapComponent implements OnInit {
    @Input() userName: any;
    // z:any=places;
    lat: number = 51.678418;
    lng: number = 7.809007;

    placeName: string = '';
    styleInfo:string = 'none';
    commentsCollection:any[]=[];
    comnt:string;
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

    places:Place[];
    constructor(private service: PlaceService) {}
    ngOnInit() {
        this.service.getPlaces().then(places => this.places = places);
        
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position:any)=>{
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude
            }
        , null);
        }
    }
    clickedMarker(place:any){
        this.styleInfo = 'block';
        this.placeName = place.name;
        this.commentsCollection=place.comments;
    }
    clicked() {
        if(this.comnt !== ''){
            let newComment={
                img:'http://localhost:3000/',
                userName:this.userName.username,
                text:this.comnt
            };
            this.commentsCollection.push(newComment);
            this.comnt=''
        }

    }

}