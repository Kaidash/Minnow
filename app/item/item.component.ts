/**
 * Created by nikita on 20.12.16.
 */
import { Component, ngOnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {places} from '../places/places'


@Component({
    selector: 'item-info',
    template: `<h3>Модель {{place.userName}}</h3>`
})

export class ItemComponent  {
    private id: number;
    private place:any;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute){

        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnInit(){
        this.subscription.unsubscribe();
        this.eachPlaces()
    }
   
    eachPlaces(){
        for (var item of places) {
            if(item.id == this.id){
               this.place=item
            }
        }
        console.log(this.place); // 9,2,5
    }
}
