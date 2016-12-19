/**
 * Created by nikita on 15.12.16.
 */
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';


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
        <div class="comment-wrapper" [style.display]="styleInfo">
            <h1 ><b>Название водоема :</b> {{placeName}}</h1>
            <div class="comment-box" *ngFor="let comment of commentsCollection">
                <span class="comment-author">{{comment.userName}}</span>
                <img class="user-avatar" src="/src/img/user1.png" alt="user">
                <p>{{comment.text}}</p>
            </div>
            <div class="styled-input wide">
              <textarea id="comnt" [(ngModel)]="comnt" required></textarea>
              <label>Message</label>
              <span></span>
            </div>   
            <button type="submit" md-raised-button (click)="clicked()">Отпарвить</button>
        </div>
`
})

export class MapComponent {
    currentUser: User;
    users: User[] = [];

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
            img:'http://localhost:3000/'
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
            img:'http://localhost:3000/'
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
            img:'http://localhost:3000/'
        },
    ];
    constructor(private userService: UserService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
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
        let newComment={
            img:'http://localhost:3000/',
            userName:this.currentUser.firstName,
            text:this.comnt
        }
        this.commentsCollection.push(newComment)
        this.comnt=''
    }

}