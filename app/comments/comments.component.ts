/**
 * Created by nikita on 21.12.16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../_models/place';
import { PlaceService } from '../_services/place.service';


@Component({
    template: `
    <div class="comment-wrapper">
        Comments Component
        <h1 (click)="showObject()"><b>Название водоема :</b>{{place.userName}} </h1>
        <!--<div class="comment-box" *ngFor="let comment of commentsCollection">-->
            <!--<span class="comment-author">{{comment.userName}}</span>-->
            <!--<img class="user-avatar" src="/src/img/user1.png" alt="user">-->
            <!--<p>{{comment.text}}</p>-->
        <!--</div>-->
        <!--<div class="styled-input wide">-->
            <!--<textarea id="comnt" [(ngModel)]="comnt" required></textarea>-->
            <!--<label>Message</label>-->
            <!--<span></span>-->
        <!--</div>-->
        <!--<button type="submit" md-raised-button (click)="clicked()">Отпарвить</button>-->
    </div>
  `
})
export class CommentsComponent implements OnInit  {
    place:any={};
    id:string='';
    constructor(private service: PlaceService, private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.route.params.forEach(params => {
            let id = params['name'];
            this.service.getPlace(id).then(places => {
                    console.log(places);
                    if(places==undefined){
                        this.router.navigate(['/map']);
                    }
                    else{
                        this.place=places;
                        this.id=places.id;
                    }
            });
            // console.log(this.id)
        });
        // console.log(this.id);
        // console.log(this.place);
    }
    showObject(){

    }

}