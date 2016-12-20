/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'map.component.html',
    selector: 'map-component'
})

export class MapComponent {
    @Input() userName: any

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

    places:any[]=[
        {
            name: 'Krasnyy Oslik',
            lat: 49,
            lng:36,
            comments:[{
                img:'http://localhost:3000/',
                userName:'Nikita',
                text:'asdadasdasdasd'
            },{
                img:'http://localhost:3000/',
                userName:'Stas',
                text:'Lalalala'
            }],
            status:true,
            userName:'Nikita',
            img:'http://localhost:3000/',
            id:'1'
        },
        {
            name: 'Krasnyy Oslik2',
            lat: 50,
            lng:36,
            comments:[{
                img:'http://localhost:3000/',
                userName:'Tatas',
                text:'asdadasdasdasd'
            },{
                img:'http://localhost:3000/',
                userName:'Stas',
                text:'Lalalala'
            }],
            status:true,
            userName:'Oleg',
            img:'http://localhost:3000/',
            id:'2'
        },
        {
            name: 'Krasnyy Oslik3',
            lat: 49.96,
            lng:36,
            comments:[{
                img:'http://localhost:3000/',
                userName:'Nikita',
                text:'123123123'
            }],
            status:true,
            userName:'Stas',
            img:'http://localhost:3000/',
            id:'3'
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
            }
            console.log(newComment);
            this.commentsCollection.push(newComment)
            this.comnt=''
        }

    }

}